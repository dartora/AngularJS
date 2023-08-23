import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css'],
})
export class CreateUserComponent implements OnInit {
  registerForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<CreateUserComponent>,
    private formBuilder: FormBuilder,
    private userService: UserService
  ) {
    this.registerForm = formBuilder.group({
      name: new FormControl(''),
      email: new FormControl(''),
      gender: new FormControl(''),
      status: new FormControl(''),
    });
  }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.registerForm = this.formBuilder.group({
      name: [new FormControl(''), Validators.required],
      email: [new FormControl(''), [Validators.required, Validators.email]],
      gender: [new FormControl(''), Validators.required],
      status: [new FormControl(''), Validators.required],
    });
  }

  saveUser(): void {
    if (this.registerForm.valid) {
      const userData = this.registerForm.value;
      this.userService.createUser(userData).subscribe(
        (response) => {
          console.log(response);
        },
        (error) => {
          console.error('Error updating user data:', error);
          console.error(error);
        }
      );
    }
  }
}
