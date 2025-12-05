package com.example.server.module;

public class AnimeInfo {
    private String animeName;
    private String animeImageURL;
    private String category, genre;

    public AnimeInfo(String animeName, String animeImageURL, String category, String genre) {
        this.animeName = animeName;
        this.animeImageURL = animeImageURL;
        this.category = category;
        this.genre = genre;
    }
}
