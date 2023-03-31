package me.maxgibbs.monjournal.rest;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import me.maxgibbs.monjournal.domain.Article;
import me.maxgibbs.monjournal.dto.ArticleCreationDto;
import me.maxgibbs.monjournal.service.ArticleService;

@RestController
@RequestMapping("/api")
public class ArticleResource {

    ArticleService articleService;

    public ArticleResource(ArticleService articleService){
        this.articleService = articleService;
    }
    
    @CrossOrigin
    @GetMapping("/articles/{id}")
    public ResponseEntity<Article> getArticle(@PathVariable Long id){
        return ResponseEntity.ok().body(articleService.findOne(id).get());
    }

    @CrossOrigin
    @GetMapping("/articles")
    public ResponseEntity<List<Article>> getAllArticles(){
        return ResponseEntity.ok().body(articleService.findAll());
    }

    @CrossOrigin
    @PostMapping("/articles")
    public ResponseEntity<Article> save(@RequestBody ArticleCreationDto articleCreationDto){
        return new ResponseEntity<>(articleService.saveDto(articleCreationDto), null, HttpStatus.OK);
    }

    @CrossOrigin
    @DeleteMapping("/articles/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id){
        articleService.delete(id);
        return ResponseEntity.ok().body(null);
    }
}
