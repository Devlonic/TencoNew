import { Component, OnInit } from '@angular/core';
import { Animations } from '../tenco-hover-animated-tile/tenco-hover-animated-tile.component';

@Component({
  selector: 'app-tenco-hover-animated-tile-container',
  templateUrl: './tenco-hover-animated-tile-container.component.html',
  styleUrls: ['./tenco-hover-animated-tile-container.component.scss']
})
export class TencoHoverAnimatedTileContainerComponent implements OnInit {
  animations: Animations[] = [
    Animations.TopDown,
    Animations.RotateY,
    Animations.RightLeft,
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
