import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toggle-btn',
  templateUrl: './toggle-btn.component.html',
  styleUrls: ['./toggle-btn.component.css']
})
export class ToggleBtnComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
@Output() changed = new EventEmitter<boolean>();

}