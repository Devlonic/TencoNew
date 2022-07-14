import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tenco-imaged-text',
  templateUrl: './tenco-imaged-text.component.html',
  styleUrls: ['./tenco-imaged-text.component.scss']
})
export class TencoImagedTextComponent implements OnInit {
  @Input() textRows: string[] = [];
  @Input() image: string = "";
  @Input() title: string = "";
  constructor() { }

  ngOnInit(): void {
  }

}
