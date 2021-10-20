import { Component, OnInit } from '@angular/core';
import { hoverTrigger, textHoverTrigger } from './animation';

@Component({
  selector: 'app-expand-container-on-hover',
  templateUrl: './expand-container-on-hover.component.html',
  styleUrls: ['./expand-container-on-hover.component.scss'],
  animations: [hoverTrigger, textHoverTrigger]
})
export class ExpandContainerOnHoverComponent {
  state = -1;
  constructor() { }

  expand(item: number) {
    this.state = item;
  }
  collapse(item: number) {
    this.state = -1;
  }

  getClass(index: number) {
    return `style${index}`;
  }
}