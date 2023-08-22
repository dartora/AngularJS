import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { UserService } from 'src/app/Services/user.service';
import { Router } from '@angular/router';
import { MatMenuTrigger } from '@angular/material/menu';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../ConfirmDialog/confirm-dialog.component'; // Adjust the import path

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements AfterViewInit {
  displayedColumns: string[] = ['name', 'email', 'gender', 'status', 'actions'];
  dataSource = new MatTableDataSource<IUser>([]);

  constructor(
    private userService: UserService,
    private router: Router,
    private dialog: MatDialog
  ) {
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
    // Open the confirmation dialog
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '250px', // Adjust the dialog width
      data: 'Você realmente deseja deletar permanentemente esse usuário?', // Pass confirmation message
    });

    // Handle the dialog result
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        // User confirmed the deletion, call the deleteUser method
        this.userService.deleteUser(userId).subscribe(
          (response) => {
            // Handle successful deletion, for example, update the user list
            this.loadUsers();
          },
          (error) => {
            console.error('Error deleting user:', error);
            // Handle error, show an error message to the user
          }
        );
      }
    });

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
