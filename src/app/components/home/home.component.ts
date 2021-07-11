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

  constructor(private http:HttpClient, private spotify:SpotifyService) { 

    this.spotify.getNewRealses()
      .subscribe((data:any) => this.newRealses = data.albums.items)
      console.log(this.newRealses)
  }

  ngOnInit(): void {
  }

}
