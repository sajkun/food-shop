import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-site-footer',
  templateUrl: './site-footer.component.html',
  styleUrls: ['./site-footer.component.scss']
})

export class SiteFooterComponent implements OnInit {

  phone = {
    label: 'תונמזהל ',
    number: '1-800-30-3-33'
  }

  constructor() { }

  ngOnInit(): void {
    this.menu = this.getMenu();
  }

  getMenu() {
    var menu =[
      {
        url: '#',
        text: 'םיפינס ',
      },
      {
        url: '#',
        text: ' טירפת ',
      },
      {
        url: '#',
        text: ' רתאה ןונקת ',
      },
      {
        url: '#',
        text: ' רשק רוצ ',
      }
    ]
    return menu;
  }

}
