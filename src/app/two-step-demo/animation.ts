import { trigger, state, style, transition, animate } from '@angular/animations';

export const clickedStateTrigger = trigger('clickedState', [
  state('a', style({
    backgroundColor: 'lightcoral',
    border: '1px solid black',
    width: '100px',
    height: '100px',
    transform: 'translateX(0)'
  })),
  state('b', style({
    backgroundColor: 'lightblue',
    border: '1px solid blue',
    width: '50px',
    height: '300px',
    transform: 'translateX(200%)'
  })),
  transition('a <=> b', [
    // styling WHILE transitioning
    animate(1000,
      style({
        border: '1px solid red',
        backgroundColor: 'yellow',
      })
    ),
    //remove this to see what happens (it conterols the time of the 'state' animation)
    animate(1000)
  ])
]);

// styling in `a <=> b` will be applied first and then style from the correct state (a or b)