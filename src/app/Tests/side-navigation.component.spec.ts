import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNavigationComponent } from '../Components/Sidebar/side-navigation.component';

describe('SideNavigationComponent', () => {
  let component: SideNavigationComponent;
  let fixture: ComponentFixture<SideNavigationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SideNavigationComponent],
    });
    fixture = TestBed.createComponent(SideNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    //@ts-ignore
    expect(component).toBeTruthy();
  });
});
