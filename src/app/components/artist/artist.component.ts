import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css'],
})
export class ArtistComponent implements OnInit {

  artist: any = {};
  topTracks: any[] = [];
  loading: boolean = true;

  constructor(private router: ActivatedRoute, private spotify: SpotifyService) {

    this.router.params.subscribe((param) => {
      this.getArtist(param['id']);
      this.getTopTracks(param['id']);     
    })
  }

  ngOnInit(): void {}

  getArtist(id: string) {
    this.spotify.getArtistById(id).subscribe((data) => (this.artist = data));
  }
  getTopTracks(id: string) {
    this.spotify.getTopTracks(id).subscribe((data) => {
      this.topTracks = data;
      console.log(this.topTracks)
      this.loading = false;
    });
  }
}
