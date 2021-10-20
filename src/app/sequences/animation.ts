import { trigger, transition, state, stagger, animate, style, query } from '@angular/animations';


export const listItemsAnimation = trigger('flyInOut', [
  state('in', style({ transform: 'translateX(0)' })),
  transition('void => *', [
    style({ transform: 'translateX(-100%)' }),
    animate(300)
  ]),
  transition('* => void', [
    animate(200, style({ transform: 'translateX(100%)' })),
    animate(200, style({ height: 0 }))
  ])
])



