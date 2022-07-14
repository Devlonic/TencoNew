import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tenco-numered-list-text-item',
  templateUrl: './tenco-numered-list-text-item.component.html',
  styleUrls: ['./tenco-numered-list-text-item.component.scss']
})
export class TencoNumeredListTextItemComponent implements OnInit {
  @Input() title: string | undefined = "Title";
  @Input() text: string | undefined = "Element description. Next tence.";
  @Input() number: number | undefined = 1;
  constructor() { }

  ngOnInit(): void {
  }

}
