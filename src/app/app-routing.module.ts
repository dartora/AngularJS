import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './Components/Posts/posts.component';
import { TableComponent } from './Components/Users/Table/table.component';
import { CreateUserComponent } from './Components/Users/Create/create-user.component';

const routes: Routes = [
  { path: 'usuarios', component: TableComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'criar-usuario', component: CreateUserComponent },

  { path: '', redirectTo: '/usuarios', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
