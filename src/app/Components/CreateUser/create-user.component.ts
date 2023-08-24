import { Component, OnInit, VERSION } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { UserService } from 'src/app/Services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-test',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css'],
})
export class CreateUserComponent implements OnInit {
  registerForm!: FormGroup;
  constructor(
    // public dialogRef: MatDialogRef<CreateUserComponent>,
    private formBuilder: FormBuilder,
    private userService: UserService,
    private _snackBar: MatSnackBar
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
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      gender: ['', Validators.required],
      status: ['', Validators.required],
    });
  }
  saveUser(): void {
    if (this.registerForm.valid) {
      const userData = this.registerForm.value;
      this.userService.createUser(userData).subscribe(
        (response) => {
          this.registerForm.reset();
          this._snackBar.open('Usuário cadastrado com sucesso!', 'Close', {
            duration: 100000, // Duration in milliseconds
            panelClass: ['success-snackbar', 'bg-green', 'text-white'],
          });
        },
        (error) => {
          console.error('Error updating user data:', error);
          this._snackBar.open(
            'Erro ao criar usuário: ' +
              error.error[0].field +
              ' ' +
              error.error[0].message,
            'Close',
            {
              duration: 10000, // Duration in milliseconds
              panelClass: ['error-snackbar'], // You can define custom styles for error snackbar
            }
          );
        }
      );
    }
  }
}
