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
      Authorization:'Bearer BQAIzSc1_uJsfrIx1euhgfjZHgvt3syUsea6FW-9ErL6Y0HgW1RbhXyjP_MkzjH8PpK8sLugRkTVhpeCzdQ'
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
}
