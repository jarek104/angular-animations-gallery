import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SimpleSlideInComponent } from '../simple-slide-in/simple-slide-in.component';
import { ExpandContainerOnHoverComponent } from '../expand-container-on-hover/expand-container-on-hover.component';
import { RouteFadeInComponent } from '../route-fade-in/route-fade-in.component';
import { TwoStepDemoComponent } from '../two-step-demo/two-step-demo.component';
import { RouteAComponent } from '../route-fade-in/route-a/route-a.component';
import { RouteBComponent } from '../route-fade-in/route-b/route-b.component';
import { RouteSlideFromSidesComponent } from '../route-slide-from-sides/route-slide-from-sides.component';
import { RouteSaComponent } from '../route-slide-from-sides/route-sa/route-sa.component';
import { RouteSbComponent } from '../route-slide-from-sides/route-sb/route-sb.component';
import { StaggeredListComponent } from '../staggered-list/staggered-list.component';
import { SequencesComponent } from '../sequences/sequences.component';
import { WholePageOverlayComponent } from '../whole-page-overlay/whole-page-overlay.component';


export const ROUTES: Routes = [
  { path: 'always-slide-down', component: SimpleSlideInComponent },
  { path: 'two-step-demo', component: TwoStepDemoComponent },
  { path: 'expand-on-hover', component: ExpandContainerOnHoverComponent },
  { path: 'route-fade-in-out', component: RouteFadeInComponent, children: [
    { path: 'route-a', component: RouteAComponent },
    { path: 'route-b', component: RouteBComponent },
    { path: '', component: RouteAComponent, pathMatch: 'full' },
   ]
  },
  { path: 'route-slide-from-sides', component: RouteSlideFromSidesComponent, children: [
    { path: 'route-sa', component: RouteSaComponent },
    { path: 'route-sb', component: RouteSbComponent },
    { path: '', component: RouteAComponent, pathMatch: 'full' },
   ]
  },
  { path: 'staggered-list', component: StaggeredListComponent },
  { path: 'sequences', component: SequencesComponent },
  { path: 'whole-page-overlay', component: WholePageOverlayComponent },
  { path: '**', redirectTo: 'always-slide-down' },
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule],
})
export class AppRoutingModule {
  constructor() {}
}
