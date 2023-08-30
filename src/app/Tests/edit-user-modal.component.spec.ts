import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditUserModalComponent } from '../Components/Users/EditModal/edit-user-modal.component';
import { EditUserModalModule } from '../Components/Users/EditModal/edit-user-modal.module';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('EditUserModalComponent', () => {
  let component: EditUserModalComponent;
  let fixture: ComponentFixture<EditUserModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditUserModalComponent],
      imports: [EditUserModalModule, HttpClientModule, BrowserAnimationsModule],
      providers: [
        {
          provide: MatDialogRef,
          useValue: {},
        },
        {
          provide: MAT_DIALOG_DATA,
          useValue: {},
        },
      ],
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditUserModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // Add your test cases here

  it('should create', () => {
    //@ts-ignore
    expect(component).toBeTruthy();
  });
});
