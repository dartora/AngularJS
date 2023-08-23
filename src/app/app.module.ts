import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './Components/Users/users.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Import BrowserAnimationsModule
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { TableModule } from './Components/Table/table.module';
import { EditUserModalModule } from './Components/EditUserModal/edit-user-modal.module';
import { PostsModule } from './Pages/Posts/posts.module';

@NgModule({
  declarations: [AppComponent, UsersComponent],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    TableModule,
    EditUserModalModule,
    PostsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
