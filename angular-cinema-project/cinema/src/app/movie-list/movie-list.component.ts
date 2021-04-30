import { Component, OnInit } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Movie } from '../model/movie';
import { HttpService } from '../service/http.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  

  constructor(
    private httpService:HttpService
  ) {

  }
 
 movies:BehaviorSubject<Movie[]> | Observable<Movie[]>=this.httpService.getMovieList()

  ngOnInit(): void {
      this.httpService.getMovieList()
  }

  getMovies(): void {}

 deleteMovie(id: number): any {
    return
  }

}
