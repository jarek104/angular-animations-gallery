import { Component, OnInit } from '@angular/core';
import { slideDownTransition } from './animation';

@Component({
  selector: 'app-simple-slide-in',
  templateUrl: './simple-slide-in.component.html',
  styleUrls: ['./simple-slide-in.component.css'],
  animations: [ slideDownTransition ]
})
export class SimpleSlideInComponent implements OnInit {

  state = 'coral';
  constructor() { }

  ngOnInit() {
  }

}