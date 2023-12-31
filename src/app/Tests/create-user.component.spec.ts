import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateUserComponent } from '../Components/Users/Create/create-user.component';
import { CreateUserModule } from '../Components/Users/Create/create-user.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('CreateUserComponent', () => {
  let component: CreateUserComponent;
  let fixture: ComponentFixture<CreateUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateUserComponent],
      imports: [CreateUserModule, HttpClientModule, BrowserAnimationsModule],
      providers: [HttpClient],
    });
    fixture = TestBed.createComponent(CreateUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    //@ts-ignore
    expect(component).toBeTruthy();
  });
});
