import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { ConfirmDialogModule } from '../ConfirmDialog/confirm-dialog.module'; // Import the ConfirmDialogModule
import { TableComponent } from './table.component';
import { EditUserModalModule } from '../EditUserModal/edit-user-modal.module';
import { AppRoutingModule } from 'src/app/app-routing.module';

@NgModule({
  declarations: [TableComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatMenuModule,
    ConfirmDialogModule,
    EditUserModalModule,
    AppRoutingModule,
  ],
  exports: [TableComponent],
})
export class TableModule {}
