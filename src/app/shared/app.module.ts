import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from '../app.component';
import { AppRoutingModule } from './routing.module';
import { SharedModule } from './shared.module';
import { MaterialModule } from './material.module';
import { SimpleSlideInComponent } from '../simple-slide-in/simple-slide-in.component';
import { ExpandContainerOnHoverComponent } from '../expand-container-on-hover/expand-container-on-hover.component';
import { RouteFadeInComponent } from '../route-fade-in/route-fade-in.component';
import { RouteAComponent } from '../route-fade-in/route-a/route-a.component';
import { RouteBComponent } from '../route-fade-in/route-b/route-b.component';
import { TwoStepDemoComponent } from '../two-step-demo/two-step-demo.component';
import { RouteSlideFromSidesComponent } from '../route-slide-from-sides/route-slide-from-sides.component';
import { RouteSaComponent } from '../route-slide-from-sides/route-sa/route-sa.component';
import { RouteSbComponent } from '../route-slide-from-sides/route-sb/route-sb.component';
import { RouterAnimationService } from '../route-slide-from-sides/router-animation.service';
import { StaggeredListComponent } from '../staggered-list/staggered-list.component';
import { SequencesComponent } from '../sequences/sequences.component';
import { WholePageOverlayComponent } from '../whole-page-overlay/whole-page-overlay.component';
import { OverlayComponent } from '../whole-page-overlay/overlay/overlay.component';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule, 
    AppRoutingModule,
    SharedModule,
    MaterialModule,
    BrowserAnimationsModule
    ],
  declarations: [ 
    AppComponent, 
    SimpleSlideInComponent,
    ExpandContainerOnHoverComponent,
    RouteFadeInComponent,
    TwoStepDemoComponent,
    RouteAComponent,
    RouteBComponent,
    RouteSlideFromSidesComponent,
    RouteSaComponent,
    RouteSbComponent,
    StaggeredListComponent,
    SequencesComponent,
    WholePageOverlayComponent,
    OverlayComponent
    ],
  bootstrap:    [ AppComponent ],
  providers: [
    RouterAnimationService
  ]
})
export class AppModule { }
