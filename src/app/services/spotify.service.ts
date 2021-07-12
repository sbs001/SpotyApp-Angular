import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators'

@Injectable()
export class SpotifyService {
  constructor(private http: HttpClient) {
  }

  token:string = 'Bearer BQCzgg07J86fzeloCeqp_Ae81U8bu5n2H_dpo0D_dPGpsJ4zzbPjQGHVztShwRs9g6zwTDmN-NVBss-MD0Y'

  getNewRealses() {
    const headers = new HttpHeaders({Authorization:this.token});
    return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers })
      .pipe( map( data => data['albums'].items))
  }

  getArtist(artist:string){
    const headers = new HttpHeaders({Authorization:this.token});
    return this.http.get(`https://api.spotify.com/v1/search?q=${artist}&type=artist&limit=15`, { headers })
      .pipe( map( data => data['artists'].items))

  }
}
