import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { UserService } from 'src/app/Services/user.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatMenuTrigger } from '@angular/material/menu';
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
    MatIconModule,
    MatMenuModule,
  ],
})
export class TableComponent implements AfterViewInit {
  displayedColumns: string[] = ['name', 'email', 'gender', 'status', 'actions'];
  dataSource = new MatTableDataSource<IUser>([]);

  constructor(private userService: UserService, private router: Router) {
    this.paginator = {} as MatPaginator;
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatMenuTrigger) menuTrigger!: MatMenuTrigger;

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

  editUser(userId: number) {
    // Implement your edit logic here
    // For example, you can navigate to the edit page
    // this.router.navigate(['/edit-user', userId]);

    // Close the menu after action
    this.menuTrigger.closeMenu();
  }

  deleteUser(userId: number) {
    // Implement your delete logic here
    // For example, you can show a confirmation dialog and delete the user if confirmed

    // Close the menu after action
    this.menuTrigger.closeMenu();
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
  id: number;
  name: string;
  email: string;
  gender: string;
  status: string;
}
