import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environment';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private baseUrl = 'https://api.themoviedb.org/3';
  private options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${environment.apiToken}`,
    }
  };

  private favorites: Movie[] = [];
  private http = inject(HttpClient);

  // Récupérer les films populaires
  getPopularMovies(): Observable<any> {
    return this.http.get(`${this.baseUrl}/movie/popular`, this.options);
  }

  getMovieDetails(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/movie/${id}`, this.options);
  }

  // Rechercher des films par titre
  searchMovies(query: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/search/movie?query=${query}`, this.options);
  }

  addToFavorites(movie: Movie) {
    if (!this.isFavorite(movie.id)) {
      this.favorites.push(movie);
    }
  }

  removeFromFavorites(movieId: number) {
    this.favorites = this.favorites.filter((movie) => movie.id !== movieId);
  }

  isFavorite(movieId: number): boolean {
    return this.favorites.some((movie) => movie.id === movieId);
  }

  getFavorites(): Movie[] {
    return this.favorites;
  }
}
