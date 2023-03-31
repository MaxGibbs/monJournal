package me.maxgibbs.monjournal.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import jakarta.transaction.Transactional;
import me.maxgibbs.monjournal.domain.Article;
import me.maxgibbs.monjournal.dto.ArticleCreationDto;
import me.maxgibbs.monjournal.repository.ArticleRepository;
import me.maxgibbs.monjournal.service.ArticleService;

@Service
@Transactional
public class ArticleServiceImpl implements ArticleService {

    private final ArticleRepository articleRepository;

    public ArticleServiceImpl(ArticleRepository articleRepository){
        this.articleRepository = articleRepository;
    }

    @Override
    public Article saveDto(ArticleCreationDto article) {
        return articleRepository.save(new Article(article.getTitle(), article.getContent()));
    }

    @Override
    public Optional<Article> findOne(Long id) {
        return articleRepository.findById(id);
    }

    @Override
    public List<Article> findAll() {
       return articleRepository.findAll();
    }

    @Override
    public void delete(Long id) {
        articleRepository.deleteById(id);
    }
    
}
