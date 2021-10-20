import { trigger, state, style, transition, animate, query, group, animateChild } from '@angular/animations';

export const hoverTrigger = trigger('hoverState', [
  state('true', style({
    height: '300px',
  })),
  state('false', style({
    height: '*',
  })),
  transition('* <=> *', [
  group([
    query('@textHoverTrigger', animateChild()),
    animate(200),
  ]),
]),
]);

export const textHoverTrigger = trigger('textHoverTrigger', [
  state('true', style({
    opacity: 1,
  })),
  state('false', style({
    opacity: 0,
  })),
  transition('* <=> *', [
  group([
    animate(200),
  ]),
]),
]);