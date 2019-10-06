import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDetailsComponent } from './user-details/user-details.component';
import { ToggleBtnComponent } from './Utilize/toggle-btn/toggle-btn.component';
import { MyTableService } from './Services/my-Tables.service';
import { FormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,FormsModule
  ],
  exports:[
        UserDetailsComponent
    ],
  declarations: [UserDetailsComponent, ToggleBtnComponent],
  providers: [MyTableService]
})
export class AngularExerciseModule { }