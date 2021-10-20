import { Component, OnInit } from '@angular/core';
import { fadeAnimation } from './animation';

@Component({
  selector: 'app-route-fade-in',
  templateUrl: './route-fade-in.component.html',
  styleUrls: ['./route-fade-in.component.scss'],
  animations: [fadeAnimation]
})
export class RouteFadeInComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public getRouterOutletState(outlet: any) {
    return outlet.isActivated ? outlet.activatedRoute : '';
  }

}