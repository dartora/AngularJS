import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableComponent } from '../Components/Users/Table/table.component';
import { HttpClientModule } from '@angular/common/http';
import { TableModule } from '../Components/Users/Table/table.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('TableComponent', () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableComponent],
      imports: [HttpClientModule, BrowserAnimationsModule, TableModule],
    });
    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    //@ts-ignore
    expect(component).toBeTruthy();
  });
});
