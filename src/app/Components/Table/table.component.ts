import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { UserService } from 'src/app/Services/user.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  standalone: true,
  imports: [
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
  ],
})
export class TableComponent implements AfterViewInit {
  displayedColumns: string[] = ['name', 'email', 'gender', 'status'];
  dataSource = new MatTableDataSource<IUser>([]);
  constructor(private userService: UserService) {
    this.paginator = {} as MatPaginator;
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers() {
    this.userService.getUsers().subscribe(
      (response: any) => {
        console.log(response, 'oi');
        this.dataSource.data = response; // Assign the response data to 'this.users'
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }

  ngAfterViewInit() {
    if (this.paginator) {
      this.dataSource.paginator = this.paginator;
    }
  }
  applyFilter(event: Event): string {
    let value = (event.target as HTMLInputElement).value; //getting target.value
    let filterValue = value.trim().toLowerCase(); // Remove whitespace and lowercase
    this.dataSource.filter = filterValue;
    return filterValue;
  }
}

export interface IUser {
  name: string;
  email: string;
  gender: string;
  status: string;
}
