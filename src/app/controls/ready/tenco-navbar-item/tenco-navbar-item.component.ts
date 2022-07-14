import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tenco-navbar-item',
  templateUrl: './tenco-navbar-item.component.html',
  styleUrls: ['./tenco-navbar-item.component.scss']
})
export class TencoNavbarItemComponent implements OnInit {
  @Input() navigation: string | undefined;
  @Input() title: string | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
