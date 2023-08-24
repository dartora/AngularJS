import { Component, OnInit } from '@angular/core';
import { PostService } from '../../Services/post.service';
import { UserService } from 'src/app/Services/user.service';
import { IUser } from 'src/app/Components/Table/table.component';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  posts: any[] = [];
  searchQuery = '';

  filteredPosts: any[] = [];
  userNames: { [userId: number]: string } = {};

  constructor(
    private postsService: PostService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.loadPosts();
  }

  loadPosts() {
    this.postsService.getPosts().subscribe((response: any) => {
      this.posts = response;
      this.filteredPosts = response;
      this.loadUserNames();
    });
  }

  applyFilter() {
    const filterValue = this.searchQuery.trim().toLowerCase();

    if (filterValue === '') {
      this.filteredPosts = this.posts;
    } else {
      this.getUsersByPartialName(filterValue).subscribe((userIds: number[]) => {
        this.filteredPosts = this.posts.filter((post) => {
          return (
            userIds.includes(post.user_id) ||
            post.title.toLowerCase().includes(filterValue)
          );
        });
      });
    }
  }

  getUsersByPartialName(partialName: string): Observable<number[]> {
    return this.userService.getUsers().pipe(
      map((users: IUser[]) => {
        const matchingUsers = users.filter((user) =>
          user.name.toLowerCase().includes(partialName)
        );
        return matchingUsers.map((user) => user.id);
      })
    );
  }

  loadUserNames() {
    this.userService.getUsers().subscribe((users: IUser[]) => {
      for (const user of users) {
        this.userNames[user.id] = user.name;
      }
    });
  }
  editPost() {}
  deletePost() {}
}

export interface IPost {
  id: number;
  user_id: number;
  title: string;
  body: string;
}
