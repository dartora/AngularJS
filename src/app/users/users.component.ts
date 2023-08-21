import { Component } from '@angular/core';
import { UsuarioService } from '../user.service';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  users: any[] = []; // Declare a 'users' property here
 
  constructor(private usuarioService: UsuarioService) { }
  
  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers() {
      this.usuarioService.getUsers().subscribe((data: any) => {
      this.users = data.data;
      console.log(this.users)
    });
  }
  
}


