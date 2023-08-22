import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableComponent } from '../Components/Table/table.component';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { ConfirmDialogModule } from '../Components/ConfirmDialog/confirm-dialog.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { TableModule } from '../Components/Table/table.module';
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
    expect(component).toBeTruthy();
  });
});
