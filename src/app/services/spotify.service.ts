import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient ) {
    console.log('spotify service ready');
  }

  getNewReleases(){
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQAt93_AsgqFHG034AvDBTY3BvjH3X9RdYbJIoHzFh8GG0Mn-sIiXLGM8hHGAKolAx6oJ_WQIndj6PLe5bQ'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', { headers });

  }
}
