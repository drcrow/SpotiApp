import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  @Input() items: any[] = [];

  constructor( private myRouter: Router ) { }

  ngOnInit() {
  }

  // in home this component shows disks so we need to get the first artist to show
  // in search seaction this component shows artists
  showFirstArtist( item: any ) {
    let artistID: string;
    if ( item.type === 'artist' ) {
      artistID = item.id;
    } else {
      artistID = item.artists[0].id;
    }

    this.showArtist(artistID);
  }

  showArtist( id: string ) {
    this.myRouter.navigate(['/artist', id]);
  }

}
