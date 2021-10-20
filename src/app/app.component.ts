import { Component } from '@angular/core';


import { homeViewShowTransition, sideNavSlideTranition } from './animation';

import { ROUTES } from './shared/routing.module';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ],
  animations: [
    sideNavSlideTranition,
    homeViewShowTransition
  ]
})
export class AppComponent  {
  navigationItems = ROUTES;
  showFullSidenav = true;
}
