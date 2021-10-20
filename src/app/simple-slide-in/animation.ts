import {trigger, animate, style, group, query, transition} from '@angular/animations';

export const slideDownTransition = trigger('slideDownTransition', [
  transition('* <=> *', [
    query(':enter, :leave', style({ position: 'absolute' })
      , { optional: true }),
    group([
      query(':enter', [
        style({ transform: 'translateY(-100%)' }),
        animate('0.4s ease-in-out', style({ transform: 'translateY(0%)' }))
      ], { optional: true }),
      query(':leave', [
        style({ transform: 'translateY(0%)' }),
        animate('0.4s ease-in-out', style({ transform: 'translateY(100%)' }))
      ], { optional: true }),
    ])
  ])
])