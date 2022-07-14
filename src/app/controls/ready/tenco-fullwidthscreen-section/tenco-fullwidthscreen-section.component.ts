import { NgStyle } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tenco-fullwidthscreen-section',
  templateUrl: './tenco-fullwidthscreen-section.component.html',
  styleUrls: ['./tenco-fullwidthscreen-section.component.scss']
})
export class TencoFullwidthscreenSectionComponent implements OnInit {
  @Input() image: string | undefined;
  @Input() title: string = "";
  @Input() textRows: string[] = [];
  @Input() imagePosition: string = "";
  @Input() brightness: string = "";


  style = {
    backgroundImage: "",
    backgroundPosition: "",
    filter: "",
  }

  constructor() {
  }

  ngOnInit(): void {
    this.style.backgroundImage = `url('${this.image}')`;
    this.style.backgroundPosition = `${this.imagePosition}`;
    this.style.filter = `brightness(${this.brightness})`;
  }

}
