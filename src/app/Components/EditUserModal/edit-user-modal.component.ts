import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
    private formBuilder: FormBuilder
  ) {
    let mock = {
      name: 'Ruodwolf123',
      email: 'test1@email.com.br',
      gender: 'Male',
      status: 'active',
    };
    this.editForm = this.formBuilder.group({
      // Define your form fields here, e.g., name, email, gender, status
      name: [mock.name, Validators.required],
      email: [mock.email, [Validators.required, Validators.email]],
      gender: [mock.gender, Validators.required],
      status: [mock.status, Validators.required],
    });
  }
  ngOnInit(): void {}

  saveUser(): void {
    if (this.editForm.valid) {
      // Implement the logic to save the edited user data here
      // You can emit an event or call a service to update the user data
      // Close the modal
      this.dialogRef.close();
    }
  }

  closeDialog(): void {
    // Close the modal without saving changes
    this.dialogRef.close();
  }
}
