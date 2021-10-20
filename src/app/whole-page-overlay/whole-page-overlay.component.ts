import { Component, OnInit } from '@angular/core';
import { homeViewShowTransition } from './animation';

@Component({
  selector: 'app-whole-page-overlay',
  templateUrl: './whole-page-overlay.component.html',
  styleUrls: ['./whole-page-overlay.component.scss'],
  animations: [
    homeViewShowTransition
  ]
})
export class WholePageOverlayComponent implements OnInit {
  showOverlay = false;
  constructor() { }

  ngOnInit() {
  }
  onDismiss() {
    this.showOverlay = false;
  }

}