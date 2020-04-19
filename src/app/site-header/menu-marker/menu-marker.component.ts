import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-menu-marker',
  templateUrl: './menu-marker.component.html',
  styleUrls: ['./menu-marker.component.scss']
})
export class MenuMarkerComponent implements OnInit {

  @Input() rotated: boolean;

  constructor() { }

  ngOnInit(): void {
    this.rotated = typeof(this.rotated) === 'undefined'? false : this.rotated;
  }

}
