package me.maxgibbs.monjournal.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import me.maxgibbs.monjournal.domain.Article;

public interface ArticleRepository extends JpaRepository<Article, Long> {
    
}
