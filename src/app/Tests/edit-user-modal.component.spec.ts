import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditUserModalComponent } from '../Components/EditUserModal/edit-user-modal.component';
import { EditUserModalModule } from '../Components/EditUserModal/edit-user-modal.module';

describe('EditUserModalComponent', () => {
  let component: EditUserModalComponent;
  let fixture: ComponentFixture<EditUserModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditUserModalComponent],
      imports: [EditUserModalModule],
    });
    fixture = TestBed.createComponent(EditUserModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
