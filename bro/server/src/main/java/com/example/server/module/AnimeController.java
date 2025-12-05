package com.example.server.module;

import org.springframework.web.bind.annotation.PostMapping;

public class AnimeController {
    private AnimeInfo info;
    
    @PostMapping
    public AnimeInfo getMostPopularAnime() {
        return null;
    }
}
