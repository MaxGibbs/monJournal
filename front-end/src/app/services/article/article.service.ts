import { Injectable } from "@angular/core";
import { environment } from '../../../environments/environment';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from "rxjs";
import { IArticle } from "src/app/shared/model/article.model";

@Injectable({providedIn: 'root'})
export class ArticleService {

    private API_URL= environment.API_URL;

    constructor(protected http: HttpClient) {}

    findAllArticles(): Observable<HttpResponse<IArticle[]>> {
        return this.http.get<IArticle[]>(`${this.API_URL}/api/articles`, {observe:'response'});
    }

    findArticleById(id: number): Observable<HttpResponse<IArticle>> {
        return this.http.get<IArticle>(`${this.API_URL}/api/articles/${id}`, {observe:'response'});
    }

    createArticle(articleCreationDto : any): Observable<any> {
        return this.http.post(`${this.API_URL}/api/articles`,  articleCreationDto, {observe:'response'});
    }

    deleteArticleById(id: number): Observable<any> {
        return this.http.delete<IArticle>(`${this.API_URL}/api/articles/${id}`);
    }
}