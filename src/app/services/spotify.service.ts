import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators'

@Injectable()
export class SpotifyService {
  constructor(private http: HttpClient) {
  }

  getApi(query:string){
    const url = `https://api.spotify.com/v1/${ query }`;

    const headers = new HttpHeaders({
      Authorization:'Bearer BQC-eDJRogsE34aaJKpfCckIPifmPcgwwV-2MSpMW7XbGzJjcQnFEj8w02F6ChrYdBvo6Bnx7s9HSYCR_HQ'
    });

    return this.http.get(url,{ headers })
  }

  getNewRealses() {
    return this.getApi('browse/new-releases')
      .pipe( map( data => data['albums'].items))
  }

  getArtist(artist:string){
    return this.getApi(`search?q=${artist}&type=artist&limit=15`)
      .pipe( map( data => data['artists'].items))

  }

  getArtistById(id:string){
    return this.getApi(`artists/${id}`)
  }

  getTopTracks(artistId:string){
    return this.getApi(`artists/${artistId}/top-tracks?market=es`)
      .pipe( map( data => data['tracks']))
  }
}
