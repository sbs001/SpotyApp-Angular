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
      Authorization:'Bearer BQDZHQn9cgwh_TGtbAGWItrAEgva6z82ZB-DCgbPEJ5sCJKF6Go60ltBCSK9K_jNY6SiohHaJa9-DroGTik'
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
}
