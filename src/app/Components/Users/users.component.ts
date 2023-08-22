import { Component } from '@angular/core';
import { UserService } from '../../Services/user.service';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent {
  users: any[] = []; // Declare a 'users' property here

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers() {
    this.userService.getUsers().subscribe(
      (response: any) => {
        console.log(response, 'oi');
        this.users = response; // Assign the response data to 'this.users'
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }
}
