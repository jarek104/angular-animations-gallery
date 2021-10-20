import { Component, OnInit } from '@angular/core';
import { listItemsAnimation } from './animation';

@Component({
  selector: 'app-staggered-list',
  templateUrl: './staggered-list.component.html',
  styleUrls: ['./staggered-list.component.css'],
  animations: [listItemsAnimation]
})
export class StaggeredListComponent implements OnInit {
  items = ['The beginning', "I have no idea what I'm doing", 'I should have been an English major', 'This makes more sense now', 'Almost ready to debug', 'Clean compile', 'Jenkins failing', 'Debugging', 'Cheap alcohol', 'S$%& I should have finished this last night', 'Almost done', 'Finished!', 'Forgot to add that little feature', 'Jenkins failing', "F%$# this, I'm playing Apex Legends"];

  constructor() { }

  ngOnInit() {
  }

}