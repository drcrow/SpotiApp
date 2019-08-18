import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { stringify } from 'querystring';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient ) {
    console.log('spotify service ready');
  }

  getQuery( query: string ) {
    const url = 'https://api.spotify.com/v1/' + query;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQA3BJAEmEAmarrHnrjh6UG8sPfW7q4AG8O6RzSxw_jK88IxGIzgSwmy21O6jqj82Lb1T1YhBZKi7W1YQdk'
    });

    return this.http.get(url, { headers });
  }

  getNewReleases() {

    return this.getQuery( 'browse/new-releases?limit=20' )
      .pipe( map( (data: any) => {
        return data.albums.items;
      } ) );

  }

  searchArtists( term: string ) {
    
    return this.getQuery( 'search?q=' + term + '&type=artist&limit=20' )
      .pipe( map( (data: any) => {
        return data.artists.items;
      } ) );

  }
}
