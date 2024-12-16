import { MovieListPageComponent } from './pages/movie-list-page/movie-list-page.component';
import { MovieDetailsPageComponent } from './pages/movie-details-page/movie-details-page.component';
import { FavoritesPageComponent } from './pages/favorites-page/favorites-page.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', component: MovieListPageComponent },
  { path: 'movies/:id', component: MovieDetailsPageComponent },
  { path: 'favorites', component: FavoritesPageComponent },
];
