import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Movie } from '../model/movie';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  BASE_URL = 'https://tr360-frontend-exam-april.azurewebsites.net/szocei/movies';

  movieList: BehaviorSubject<Movie[]> = new BehaviorSubject<Movie[]>([])

  constructor(private http: HttpClient) { }

  getMovieList(): void {
    this.http.get<Movie[]>(`${this.BASE_URL}`).subscribe(
      list => this.movieList.next(list)
    );
  }

  deleteMovie(movie: Movie): void {
    this.http.delete<Movie>(`${this.BASE_URL}/${movie.id}`).subscribe(
      () => this.getMovieList()
    )
  }
}
