import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-edit-user-modal',
  templateUrl: './edit-user-modal.component.html',
  styleUrls: ['./edit-user-modal.component.css'],
})
export class EditUserModalComponent implements OnInit {
  editForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<EditUserModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
    private userService: UserService
  ) {
    this.editForm = this.formBuilder.group({
      // Define your form fields here, e.g., name, email, gender, status
      name: new FormControl(),
      email: new FormControl(),
      gender: new FormControl(),
      status: new FormControl(),
    });
  }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.editForm = this.formBuilder.group({
      name: [this.data.name, Validators.required],
      email: [this.data.email, [Validators.required, Validators.email]],
      gender: [this.data.gender, Validators.required],
      status: [this.data.status, Validators.required],
    });
  }

  saveUser(): void {
    if (this.editForm.valid) {
      const updatedUserData = this.editForm.value;
      // Call the service method to update the user data
      this.userService.updateUser(this.data.id, updatedUserData).subscribe(
        (response) => {
          // Close the modal
          console.log(response);
          this.dialogRef.close(true); // Pass true to indicate success
        },
        (error) => {
          console.error('Error updating user data:', error);
          // Handle error, if needed
          // You can display an error message to the user here
          console.error(error);
          // Close the modal
          this.dialogRef.close(false); // Pass false to indicate failure
        }
      );
    }
  }

  closeDialog(): void {
    // Close the modal without saving changes
    this.dialogRef.close(false);
  }
}
