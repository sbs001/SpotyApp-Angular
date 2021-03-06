import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  newRealses:any[] = [];
  loading:boolean;
  error:boolean;

  constructor(private http:HttpClient, private spotify:SpotifyService) { 

    this.loading = true;

    this.spotify.getNewRealses()
      .subscribe(
        (data) => {
          this.newRealses = data;
          this.loading = false;
       },
        (error) => {
          this.loading = false;
          this.error = true
        })
      
  }

  ngOnInit(): void {
  }

}
