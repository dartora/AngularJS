import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersComponent } from '../Components/Users/users.component';
import { HttpClientModule } from '@angular/common/http';

describe('UsersComponent', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsersComponent],
      imports: [HttpClientModule], // Add HttpClientModule to the imports
    });
    fixture = TestBed.createComponent(UsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    //@ts-ignore
    expect(component).toBeTruthy();
  });
});
