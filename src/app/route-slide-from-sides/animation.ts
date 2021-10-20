import { animate, style, transition, trigger, query, group } from '@angular/animations';

export const routeSlideStateTrigger = trigger('routeSlideState', [
  transition('* => left', [

    query(':enter', [
      style({ transform: 'translateX(-100%)' }),
      animate('0.4s ease-in-out', style({ transform: 'translateX(0%)' }))
    ], { optional: true }),
    query(':leave', [
      style({ transform: 'translateX(0%)' }),
      animate('0.4s ease-in-out', style({ transform: 'translateX(100%)' }))
    ], { optional: true }),

  ]),
  transition('* => right', [
    style({
  
      transform: 'translateX(100%)'
    }),
    animate(300)
  ]),
  transition('* => fadeIn', [
    style({
  
    }),
    animate(300)
  ]),
]);

export const leftAnimation = [
    query(':enter, :leave', style({ position: 'absolute' }), { optional: true }),
    group([
        query(':enter', [
          style({transform: 'translateX(-100%)'}), 
            animate('.5s ease-out', 
              style({transform: 'translateX(0%)'})
            )], {
            optional: true,
        }),
        query(':leave', [
          style({ transform: 'translateX(0%)' }), 
          animate('.5s ease-out', style({ transform: 'translateX(100%)'}))], {
            optional: true,
        }),
    ]),
];

export const rightAnimation = [
    query(':enter, :leave', style({ position: 'absolute' }), { optional: true }),
    group([
        query(':enter', [
          style({ transform: 'translateX(100%)'}), 
          animate('.5s ease-out', style({ transform: 'translateX(0%)' }))], {
            optional: true,
        }),
        query(':leave', [
          style({ transform: 'translateX(0%)' }), 
          animate('.5s ease-out', 
            style({ transform: 'translateX(-100%)'}))], {
            optional: true,
        }),
    ]),
];