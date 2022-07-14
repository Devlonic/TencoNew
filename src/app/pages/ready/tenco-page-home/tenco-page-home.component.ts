import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TencoSlidedTextComponent } from 'src/app/controls/ready/tenco-slided-text/tenco-slided-text.component';

@Component({
  selector: 'app-tenco-page-home',
  templateUrl: './tenco-page-home.component.html',
  styleUrls: ['./tenco-page-home.component.scss']
})
export class TencoPageHomeComponent implements OnInit {

  @Output() slideTextOnScreen = new EventEmitter<TencoSlidedTextComponent>;

  constructor() { }

  ngOnInit(): void {
  }

  onScrollPage(event: any) {
    console.log(event);
  }
}
