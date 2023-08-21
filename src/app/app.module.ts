import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './Components/Users/users.component';
import { HttpClientModule } from '@angular/common/http';
import { SideNavigationComponent } from './Components/Sidebar/side-navigation.component';
import { PostsComponent } from './Pages/Posts/posts.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    SideNavigationComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
