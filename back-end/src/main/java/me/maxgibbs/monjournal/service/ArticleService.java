package me.maxgibbs.monjournal.service;

import java.util.List;
import java.util.Optional;

import me.maxgibbs.monjournal.domain.Article;
import me.maxgibbs.monjournal.dto.ArticleCreationDto;

public interface ArticleService {
    
    Article saveDto(ArticleCreationDto article);

    Optional<Article> findOne(Long id);

    List<Article> findAll();

    void delete(Long id);
}
