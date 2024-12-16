import { Component, inject } from '@angular/core';
import { Movie } from '../../models/movie.model';
import { MovieService } from '../../services/movie.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-movie-details-page',
  standalone: true,
  imports: [],
  templateUrl: './movie-details-page.component.html',
  styleUrl: './movie-details-page.component.scss'
})
export class MovieDetailsPageComponent {
  movie!: Movie;
  private movieService= inject(MovieService);
  route: ActivatedRoute = inject(ActivatedRoute);
  

  constructor() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const movieId = Number(params.get('id'));
      this.movieService.getMovieDetails(movieId).subscribe((data: any) => {
        this.movie = data;
      });
    });
  }
}
