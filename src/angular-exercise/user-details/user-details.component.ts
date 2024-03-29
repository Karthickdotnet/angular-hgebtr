import { Component, OnInit,Input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { IInterfaceEx } from './details';
import { ToggleBtnComponent } from '../Utilize/toggle-btn/toggle-btn.component';

import { MyTableService } from '../Services/my-Tables.service';
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})

export class UserDetailsComponent implements OnInit,IInterfaceEx,ToggleBtnComponent {
myDate1 = new Date();
 action:boolean = false;
   buttonName:any = 'Show';
   columns: string[];
   names: string[];
   animals: string[];
  constructor(private atService: MyTableService) {
  }

  ngOnInit() {
    this.columns = this.atService.getColumns();
    this.names = this.atService.getNames();
    this.animals = this.atService.getAnimals();
    
  }
    toggle() {
        this.action = !this.action;
 
    if(this.action)  
      this.buttonName = "Hide";
    else
      this.buttonName = "Show";
  }
@Input() name: string;
myDate=this.myDate1;
getDate()
{
  console.log("");
}
}