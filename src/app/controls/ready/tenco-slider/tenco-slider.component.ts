import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tenco-slider',
  templateUrl: './tenco-slider.component.html',
  styleUrls: ['./tenco-slider.component.scss']
})
export class TencoSliderComponent implements OnInit {
  items: any[] = [
    { image: "./../../../assets/imgs/companies/boucheron-150x150-1.png", link: "#" },
    { image: "./../../../assets/imgs/companies/elite-rent-a-car-150x150-1.png", link: "#" },
    { image: "./../../../assets/imgs/companies/En-coulisse-150x150-1 (1).png", link: "#" },
    { image: "./../../../assets/imgs/companies/four-seasons-150x150-2.png", link: "#" },
    { image: "./../../../assets/imgs/companies/la-réserve-150x150-1.png", link: "#" },
    { image: "./../../../assets/imgs/companies/LVMH-150x150-1.png", link: "#" },
    { image: "./../../../assets/imgs/companies/LVMH-150x150-1.png", link: "#" },
    { image: "./../../../assets/imgs/companies/LVMH-150x150-1.png", link: "#" },
    { image: "./../../../assets/imgs/companies/LVMH-150x150-1.png", link: "#" },
    { image: "./../../../assets/imgs/companies/LVMH-150x150-1.png", link: "#" },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
