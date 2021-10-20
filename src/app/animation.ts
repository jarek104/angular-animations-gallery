import { trigger, animate, style, group, query, transition, state } from '@angular/animations';

export const homeViewShowTransition = trigger('homeViewTransition', [
  transition('* => *', [
    query(':enter', [
      style({ transform: 'translateY(-10%)', opacity: 0 }),
      animate('0.2s ease-in-out', style({ transform: 'translateY(0%)', opacity: 1 }))
    ], { optional: true }),
    query(':leave', [
      style({ transform: 'translateY(0%)' }),
      animate('0.2s ease-in-out', style({ transform: 'translateY(-10%)', opacity: 0 }))
    ], { optional: true }),
  ])
]);

export const sideNavSlideTranition = trigger('sidenavAnimationSlide', [
  state('true', style({
    width: '250px'
  })),
  state('false', style({
    width: '66px'
  })),
  transition('false <=> true', animate('100ms ease'))
]);
