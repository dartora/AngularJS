import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  MatDialogModule,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

import { ConfirmDialogComponent } from '../Components/ConfirmDialog/confirm-dialog.component';
import { ConfirmDialogModule } from '../Components/ConfirmDialog/confirm-dialog.module';

describe('ConfirmDialogComponent', () => {
  let component: ConfirmDialogComponent;
  let fixture: ComponentFixture<ConfirmDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfirmDialogComponent],
      imports: [ConfirmDialogModule, MatDialogModule], // Include MatDialogModule
      providers: [
        { provide: MatDialogRef, useValue: {} }, // You can customize this value if necessary
        { provide: MAT_DIALOG_DATA, useValue: {} }, // You can customize this value if necessary
      ],
    });
    fixture = TestBed.createComponent(ConfirmDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
