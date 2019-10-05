import { Component, OnInit,Input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { IInterfaceEx } from './details';
import { ToggleBtnComponent } from '../Utilize/toggle-btn/toggle-btn.component';


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})

export class UserDetailsComponent implements OnInit,IInterfaceEx,ToggleBtnComponent {
myDate1 = new Date();
 action:boolean = false;
   buttonName:any = 'Show';
  constructor() { }

  ngOnInit() {
    
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