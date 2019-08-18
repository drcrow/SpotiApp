import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient ) {
    console.log('spotify service ready');
  }

  getNewReleases() {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQA3BJAEmEAmarrHnrjh6UG8sPfW7q4AG8O6RzSxw_jK88IxGIzgSwmy21O6jqj82Lb1T1YhBZKi7W1YQdk'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', { headers })
      .pipe( map( (data: any) => {
        return data.albums.items;
      } ) );

  }

  searchArtists( term: string ) {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQA3BJAEmEAmarrHnrjh6UG8sPfW7q4AG8O6RzSxw_jK88IxGIzgSwmy21O6jqj82Lb1T1YhBZKi7W1YQdk'
    });

    return this.http.get('https://api.spotify.com/v1/search?q=' + term + '&type=artist&limit=20', { headers })
      .pipe( map( (data: any) => {
        return data.artists.items;
      } ) );
  }
}
