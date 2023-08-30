import { Component } from '@angular/core';
import { UserService } from '../../../Services/user.service';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent {
  users: any[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers() {
    this.userService.getUsers().subscribe(
      (response: any) => {
        this.users = response;
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }
}
