import { TestBed } from '@angular/core/testing';
import { AppComponent } from '../app.component';
import { SideNavigationComponent } from '../Components/Sidebar/side-navigation.component';
import { AppModule } from '../app.module';

describe('AppComponent', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [AppModule],
      declarations: [AppComponent, SideNavigationComponent],
    }).compileComponents()
  );

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  // it(`should have as title 'test-personal-card'`, () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.componentInstance;
  //   expect(app.title).toEqual('test-personal-card');
  // });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges(); // Trigger change detection to update the view
    const compiled = fixture.nativeElement;
    const sidebarLogoElement = compiled.querySelector('.sidebar-logo');

    expect(sidebarLogoElement).toBeTruthy();
  });
});
