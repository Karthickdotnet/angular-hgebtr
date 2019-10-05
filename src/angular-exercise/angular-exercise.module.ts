import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDetailsComponent } from './user-details/user-details.component';
import { ToggleBtnComponent } from './Utilize/toggle-btn/toggle-btn.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports:[
        UserDetailsComponent
    ],
  declarations: [UserDetailsComponent, ToggleBtnComponent]
})
export class AngularExerciseModule { }