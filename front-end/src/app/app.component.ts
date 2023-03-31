import { HttpResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { ArticleService } from './services/article/article.service';
import { Article, IArticle } from './shared/model/article.model';
import { finalize, map } from 'rxjs/operators';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ArticleCreationDto } from './shared/model/dto/article-creation-dto.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'front-end';
  articleList: IArticle[] = [];
  article : IArticle = new Article;
  rechercheFormGroup : FormGroup = new FormGroup({});
  articleFormGroup : FormGroup = new FormGroup({});

  constructor(
    protected articleService: ArticleService,
    private formBuilder : FormBuilder
  ) {}

  ngOnInit(): void {
    this.findAllArticles();

    this.rechercheFormGroup = this.formBuilder.group({idArticle: [null]});
    this.articleFormGroup = this.formBuilder.group({title: [null], content: [null]});
  }

  findArticleById() {
    this.articleService.findArticleById(this.rechercheFormGroup.get(['idArticle'])?.value as number)
    .pipe(map((article : HttpResponse<IArticle>) => article.body as IArticle))
    .subscribe((article : IArticle) => {
      this.article = article;
    }, () => {
      this.article = new Article;
    })
  }

  createArticle() {
    this.articleService.createArticle({...new ArticleCreationDto(), 
      title : this.articleFormGroup.get(['title'])?.value as string,
      content: this.articleFormGroup.get(['content'])?.value as string} as IArticle)
      .subscribe((article) => this.article = article.body);
  }

  deleteArticle(id: any){
    this.articleService.deleteArticleById(id)
    .pipe(finalize(() => {
      this.findAllArticles();
    }))
    .subscribe();
  }

findAllArticles() {
    this.articleService.findAllArticles()
    .pipe(map((articles: HttpResponse<IArticle[]>) => articles.body as IArticle[]))
    .subscribe(
      (articles: IArticle[]) => {
        this.articleList = [...articles];
    });
  }
}
