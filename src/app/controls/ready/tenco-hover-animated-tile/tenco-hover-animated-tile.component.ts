import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

export enum Animations {
  TopDown, RightLeft, RotateY
};

@Component({
  selector: 'app-tenco-hover-animated-tile',
  templateUrl: './tenco-hover-animated-tile.component.html',
  styleUrls: ['./tenco-hover-animated-tile.component.scss']
})
export class TencoHoverAnimatedTileComponent implements OnInit {
  @Input() backgroundUrl: string = "";

  @Input() backTitle: string = "";
  @Input() backText: string = "";

  @Input() animType: Animations = Animations.TopDown;

  @ViewChild("front") front: ElementRef | undefined;
  @ViewChild("back") back: ElementRef | undefined;
  frontHTML: HTMLElement | undefined;
  backHTML: HTMLElement | undefined;

  animClass: any;
  animClasses = [
    { init: "anim1-init", hover: "anim1-hover" },
    { init: "anim2-init", hover: "anim2-hover" },
    { init: "anim3-init", hover: "anim3-hover" },
  ];

  constructor() { }

  ngAfterViewInit() {
    this.frontHTML = this.front?.nativeElement as HTMLElement;
    this.backHTML = this.back?.nativeElement as HTMLElement;
    switch (this.animType) {
      case Animations.TopDown:
        this.animClass = this.animClasses[0];
        break;
      case Animations.RightLeft:
        this.animClass = this.animClasses[2];
        break;
      case Animations.RotateY:
        this.animClass = this.animClasses[1];
        break;
      default:
        break;
    }

    this.backHTML.classList.add(this.animClass.init);
    console.log(this.backHTML);
  }

  ngOnInit(): void {

  }

  mouseoverFront(front: HTMLElement, back: HTMLElement) {
    back.classList.add(this.animClass.hover);
  }

  mouseleave(front: HTMLElement, back: HTMLElement) {
    back.classList.remove(this.animClass.hover);
  }
}
