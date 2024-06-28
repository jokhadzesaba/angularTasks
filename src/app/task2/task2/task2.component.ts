import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiResponse, Result } from '../interfaces';
@Component({
  selector: 'app-task2',
  templateUrl: './task2.component.html',
  styleUrls: ['./task2.component.scss'],
})
export class Task2Component implements OnInit {
  public moviesAndSeries: Result[] = [];
  public title = '';
  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.getMovies();
  }
  public getMovies(title: string = 'harry potter') {
    this.moviesAndSeries = [];
    const headers = new HttpHeaders({
      'X-RapidAPI-Key': '4746a79472mshb4e32011cd91405p1d5108jsn8eddc658a3e7',
    });
    this.http
      .get<ApiResponse>(
        `https://online-movie-database.p.rapidapi.com/title/v2/find?title=${title}&limit=20&paginationKey=0&sortArg=moviemeter%2Casc`,
        { headers: headers }
      )
      .subscribe((res: ApiResponse) => {
        this.moviesAndSeries = res.results;
        console.log(this.moviesAndSeries);
      });
  }
}
