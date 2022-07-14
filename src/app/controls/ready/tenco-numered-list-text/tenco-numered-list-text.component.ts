import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tenco-numered-list-text',
  templateUrl: './tenco-numered-list-text.component.html',
  styleUrls: ['./tenco-numered-list-text.component.scss']
})
export class TencoNumeredListTextComponent implements OnInit {
  items = [
    {
      title: "The Exclusive Network",
      text: `TENco is your key into the Inner Circle. Our members are granted coveted access to our carefully curated and constantly expanding network of renowned leaders, individuals and brands across a diverse range of industries. Building sustainable and intimate relationships, TENco is all about privileged access, and it would be our pleasure to introduce The Exclusive Network to you.`
    },
    {
      title: "Lifestyle Manager",
      text: `We anticipate your needs, add value to your experiences and are available 24/7 for any requests, whether it be business or leisure. The TENco membership is complete with unlimited access to your devoted lifestyle manager appointed to assist you with your daily tasks.`
    },
    {
      title: "Tailor-made experiences",
      text: `Rediscover the meaning of “tailor-made” as we create a variety of unique experiences relevant to your needs and interests. Each experience is meticulously designed in collaboration with our trusted partners, creating memories that you will never forget.`
    },
    {
      title: "TENco Entertainment",
      text: `TENco is all about creating sincere relationships and unforgettable moments. Together with our partners, we organise several exclusive events throughout the year, leading up to the highly anticipated annual TENco Gala. Expect glamour, opulence and lavishness; not to mention the opportunity for TENco members, partners, celebrities and industry leaders to meet, connect and build relationships.`
    },
    {
      title: "Negociated Deals",
      text: `Your benefits are maximised; your costs minimised.

Through our wide range of exclusive partnerships and negotiations with the most acclaimed establishments, TENco secures premium deals and the preferred terms on your behalf.

Our promise is to bring value to luxury through our guaranteed benefits at the lowest rates.`
    },
    {
      title: "TENco Rewards",
      text: `As you continue to use our services, further rewards await. At TENco, long-lasting relationships are rewarded with valuable compliments for our loyal members.`
    },
    {
      title: "Global Travel Experts",
      text: `TENco plans, reserves and fully manages all your travel needs. Our expertise lies in the profound understanding of your preferences and aspirations– and we are excited to organise your most memorable journeys`
    },
    {
      title: "Luxury Journal",
      text: `Based on our members’ tastes and interests, we compose a quarterly luxury journal, tailored for each member. With every edition of the TENco Luxury Journal, we present a universe of new opportunities and paths to explore.`
    },
    {
      title: "Wellness Advisors",
      text: `New insights are constantly being discovered in the world of wellness.

We are here to help you achieve your goals and elevate your health and well-being to new heights.

TENco provides all of the necessary materials on the latest health trends and connects you with leading experts and arranges retreats and recreational activities.`
    },
    {
      title: "Your TENco Moment",
      text: `Your TENco moments are yours, and yours only. As you begin your journey with TENco, we offer an experience for you to enjoy on our behalf. Welcome to the TENco World.`
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
