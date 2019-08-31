import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  artists: any[] = [];
  loading: boolean;

  constructor( private spotify: SpotifyService ) { }

  ngOnInit() {
  }

  search( term: string ) {
    console.log(term);

    if (term.length >= 3) {
      this.loading = true;
      this.spotify.searchArtists( term )
        .subscribe ( ( data: any ) => {
          console.log( data );
          this.artists = data;
          this.loading = false;
        } );
    }
  }

}
