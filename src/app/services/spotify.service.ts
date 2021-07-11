import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class SpotifyService {
  constructor(private http: HttpClient) {
  }

  getNewRealses() {
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQAbYvkRLoe02dflN9x1TUIhcm9_99VzBHxK9N7Nc9la6svatkm3nXRFgI4tTSM9hI6uoUy80W30Kmmj2UA',
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers });
  }
}
