import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient ) {
    console.log('spotify service ready');
  }

  getNewReleases() {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQD3MYDM5aidMf5Zss2n6slLuiDLlQ15SUp94QISnUmUcEzpX94vw9vUTOBSHpcx_CguLWk5KDbot7kUCns'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', { headers });

  }

  searchArtists( term: string ) {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQD3MYDM5aidMf5Zss2n6slLuiDLlQ15SUp94QISnUmUcEzpX94vw9vUTOBSHpcx_CguLWk5KDbot7kUCns'
    });

    return this.http.get('https://api.spotify.com/v1/search?q=' + term + '&type=artist&limit=20', { headers });
  }
}
