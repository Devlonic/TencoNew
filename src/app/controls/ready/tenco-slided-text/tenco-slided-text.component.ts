import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';


@Component({
  selector: 'app-tenco-slided-text',
  templateUrl: './tenco-slided-text.component.html',
  styleUrls: ['./tenco-slided-text.component.scss']
})
export class TencoSlidedTextComponent implements OnInit {
  @Input() title: string = "";
  @Input() textRows: string[] = [];
  @Input() needToSlide: boolean = true;
  @Input() textStyleClass: any = "black-text";

  @ViewChild('content') content: ElementRef | undefined;
  contentElem: HTMLElement | undefined;
  private slided: boolean = false;
  constructor() { }

  ngAfterViewInit() {
    this.contentElem = this.content?.nativeElement as HTMLElement;
    if (this.needToSlide == false)
      this.contentElem?.classList.add("slided");
  }

  ngOnInit(): void {

  }

  slideContent(event: any, block: HTMLElement) {
    if (this.slided || event.visible == false || this.needToSlide == false)
      return;

    console.log(event);
    block.classList.add("slided");
  }
}
