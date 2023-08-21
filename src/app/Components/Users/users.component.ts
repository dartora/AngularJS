import { Component } from '@angular/core';
import { UserService } from '../../Services/user.service';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  users: any[] = []; // Declare a 'users' property here

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers() {
      this.userService.getUsers().subscribe((data: any) => {
      this.users = data.data;
      console.log(this.users)
    });
  }

}


