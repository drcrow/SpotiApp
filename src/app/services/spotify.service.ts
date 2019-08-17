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
      'Authorization': 'Bearer BQAos5sLip-W1wSkWPloHe_eR7CZDcB3oYdLKfX_sSlH9iAVoASRLIdSvycZdpQa44ml1VH4b_Zw-eMLOXE'
    });
    this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', { headers })
    .subscribe( data => {
      console.log(data);
    });

  }
}
