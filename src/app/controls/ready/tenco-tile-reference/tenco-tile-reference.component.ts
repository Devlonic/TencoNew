import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tenco-tile-reference',
  templateUrl: './tenco-tile-reference.component.html',
  styleUrls: ['./tenco-tile-reference.component.scss']
})
export class TencoTileReferenceComponent implements OnInit {
  @Input() title: string = "No title";
  @Input() text: string = "Text Test.... adsasd dasdasdsa";
  @Input() icon: string = "handshake";
  constructor() { }

  ngOnInit(): void {
  }

}
