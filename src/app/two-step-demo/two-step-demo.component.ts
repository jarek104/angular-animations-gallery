import { Component, OnInit } from '@angular/core';
import { clickedStateTrigger } from './animation';

@Component({
  selector: 'app-two-step-demo',
  templateUrl: './two-step-demo.component.html',
  styleUrls: ['./two-step-demo.component.scss'],
  animations: [clickedStateTrigger]
})
export class TwoStepDemoComponent implements OnInit {
  state= 'a';
  constructor() { }

  ngOnInit() {
  }

}