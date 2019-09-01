import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent {

  newReleases: any[] = [];
  loading: boolean;
  hasError = false;
  errorMessage: string;

  constructor( private spotify: SpotifyService ) { 
    this.loading = true;
    this.spotify.getNewReleases()
      .subscribe( ( data: any ) => {
        console.log(data);
        this.newReleases = data;
        this.loading = false;
      }, ( serviceError ) => {
        this.hasError = true;
        this.loading = false;
        this.errorMessage = serviceError.error.error.message;
        console.log(serviceError.error.error);
      } );
  }

}
