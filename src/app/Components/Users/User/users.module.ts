import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { UsersComponent } from './users.component';
@NgModule({
  declarations: [UsersComponent],
  imports: [],
  exports: [UsersComponent],
})
export class UsersModule {}
