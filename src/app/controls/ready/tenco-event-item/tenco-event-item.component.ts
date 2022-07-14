import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tenco-event-item',
  templateUrl: './tenco-event-item.component.html',
  styleUrls: ['./tenco-event-item.component.scss']
})
export class TencoEventItemComponent implements OnInit {
  @Input() title: string | undefined;
  @Input() text: string | undefined;
  @Input() date: string | undefined;

  @Input() isLeft: boolean = false;
  @Input() isRight: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
