import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.scss']
})
export class OverlayComponent implements OnInit {

  @Output() requestToDismiss = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

}