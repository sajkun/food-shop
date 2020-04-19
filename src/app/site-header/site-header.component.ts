import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-site-header',
  templateUrl: './site-header.component.html',
  styleUrls: ['./site-header.component.scss']
})

export class SiteHeaderComponent implements OnInit {

  // status for expanded or collapsend menu
  showMenu = false



  constructor() { }

  ngOnInit(): void {

  }

  triggerMenu() {
    this.showMenu = !this.showMenu;
  }

}
