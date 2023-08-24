import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { CreateUserComponent } from './create-user.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
@NgModule({
  declarations: [CreateUserComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSnackBarModule,
  ],
  exports: [CreateUserComponent],
})
export class CreateUserModule {}
