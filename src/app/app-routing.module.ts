import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './Components/Posts/posts.component';
import { TableComponent } from './Components/Table/table.component';

const routes: Routes = [
  { path: 'users', component: TableComponent },
  { path: 'posts', component: PostsComponent },
  { path: '', redirectTo: '/users', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
