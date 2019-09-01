import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent {

  artist: any = {};
  tracks: any[] = [];
  loading: boolean;

  constructor( private myActRoute: ActivatedRoute, private spotify: SpotifyService ) {
    this.myActRoute.params.subscribe( params => {
      // console.log(params.id);
      this.loadArtist(params.id);
      this.loadTopTracks(params.id);
    } );
  }

  loadArtist( id: string ) {
    this.loading = true;
    this.spotify.getArtist( id )
      .subscribe( ( data: any ) => {
        // console.log(data);
        this.artist = data;
        this.loading = false;
      } );
  }

  loadTopTracks( id: string ) {
    this.spotify.getTopTracks( id )
      .subscribe( ( data: any ) => {
        console.log(data);
        this.tracks = data;
      } );
  }
}
