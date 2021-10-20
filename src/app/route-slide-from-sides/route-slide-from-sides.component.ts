import { Component, OnInit } from '@angular/core';
import { trigger, animate, style, group, query, transition} from '@angular/animations';
import { leftAnimation, rightAnimation } from './animation';
import { RouterAnimationService } from './router-animation.service';

@Component({
  selector: 'app-route-slide-from-sides',
  templateUrl: './route-slide-from-sides.component.html',
  styleUrls: ['./route-slide-from-sides.component.scss'], 
  animations: [
        trigger('animRoutes', [
            transition('* => next', rightAnimation),
            transition('* => previous', leftAnimation),
            transition('* => next_', rightAnimation),
            transition('* => previous_', leftAnimation),
        ]),
    ],
})
export class RouteSlideFromSidesComponent {

  constructor(
    public routerAnimation: RouterAnimationService
  ) { }

  next() {
    this.routerAnimation.setOutletAnimationNext();
  }
  previous() {
    this.routerAnimation.setOutletAnimationPrevious();
  }

}