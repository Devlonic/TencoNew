import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

var onElement = false;

function getOffset(el: any) {
  const rect = el.getBoundingClientRect();
  return {
    left: rect.left + window.scrollX,
    top: rect.top + window.scrollY
  };
}

@Component({
  selector: 'app-tenco-events-list',
  templateUrl: './tenco-events-list.component.html',
  styleUrls: ['./tenco-events-list.component.scss']
})

export class TencoEventsListComponent implements OnInit {
  items: any[] = [
    {
      title: "Lake Geneva Experience",
      text: `Exclusive boat experience in which our members and guests will each have their own boat to discover the most luxurious places around Lake Geneva. Participants will have the possibility to enjoy water sports challenges, beautiful lunches, and dinners as well as overnight stays at the breathtaking and historical hotels on the lake.`,
      date: '30 June - 2 July 2022',
    },
    {
      title: "Virtual FIFA 22 Challenge",
      text: `Join us for TENco’s virtual FIFA 22 challenge! This exclusive event will allow you to participate in a virtual football match with other TENco members, special guests as well as the opportunity for finalists to play against celebrity sport stars! Be ready for an unforgettable once in a lifetime experience!

The winner of the match will receive a special prize to be announced.

All funds will go to TENco Foundation for a great cause supporting those in need.`,
      date: '13 September 2022',
    },
    {
      title: "TENco Gala",
      text: `This year’s annual TENco Gala will take place in Geneva! The event will include a beautiful dinner, charity auction and entertainment combined to raise money TENco Foundation for a great cause in helping those in need.`,
      date: '14 October 2022',
    },
    {
      title: "Italy Tour & Truffle Experience",
      text: `For this year’s annual rally tour, TENco is hosting an unforgettable journey across Italy including an exclusive truffle hunting experience! The tour will include of 4 days and 4-nights, starting from the Piedmont region to the Dolomites, & ending in beautiful Lake Como. Don’t miss out this unforgettable experience!`,
      date: '2 - 5 November 2022',
    },
    {
      title: "TENco’s Winter Getaway",
      text: `TENco will organize a tailor-made experience in the alps for our members! The event will include 3 nights at a top luxurious hotel with special winter experiences and a beautiful Christmas inspired diner.`,
      date: '8- 11 December 2022',
    },

  ];

  constructor() { }

  ngOnInit(): void {
  }

  elementMouseEnterHandler() {
    onElement = true;
    console.log("onElement");

  }
  elementMouseLeaveHandler() {
    onElement = false;
    console.log("outElement");

  }
}
