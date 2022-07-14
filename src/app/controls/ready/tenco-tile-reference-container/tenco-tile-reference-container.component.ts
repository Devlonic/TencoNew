import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tenco-tile-reference-container',
  templateUrl: './tenco-tile-reference-container.component.html',
  styleUrls: ['./tenco-tile-reference-container.component.scss']
})
export class TencoTileReferenceContainerComponent implements OnInit {
  @Input() items: any[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
