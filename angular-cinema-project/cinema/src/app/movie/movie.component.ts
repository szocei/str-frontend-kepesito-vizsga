import { AfterContentChecked, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {  FormGroup } from '@angular/forms';
import { Movie } from '../model/movie';
import { HttpService } from '../service/http.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  @ViewChild('mForm', { static: true }) movieForm: FormGroup;
  movie: Movie = new Movie();

  constructor(
    private httpService:HttpService
  ) {

  }
 
 

  ngOnInit(): void {
  }

 saveMovie(): any {
    console.log('movie');
    
  }

}
