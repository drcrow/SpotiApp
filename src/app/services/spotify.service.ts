import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { stringify } from 'querystring';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient ) {
    // console.log('spotify service ready');
  }

  getQuery( query: string ) {
    const url = 'https://api.spotify.com/v1/' + query;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQCEynbufX76184Z78PfXr8lLW1u8Mhf1YACgvTkgrwJ1xq1RUaT-OsI5-6kDZ_c9jHWG_9eTiimZq7Rtsg'
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

  getArtist( id: string ) {
    return this.getQuery( 'artists/' + id )
      .pipe( map( (data: any) => {
        return data;
      } ) );
  }

  getTopTracks( id: string ) {
    return this.getQuery( 'artists/' + id + '/top-tracks?country=AR' )
      .pipe( map( (data: any) => {
        return data.tracks;
      } ) );
  }
}
