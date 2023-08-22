import { Component } from '@angular/core';
import { PostService } from '../../Services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent {
  posts: any[] = []; // Declare a 'users' property here

  constructor(private postsService: PostService) {}

  ngOnInit(): void {
    this.loadPosts();
  }

  loadPosts() {
    this.postsService.getPosts().subscribe((response: any) => {
      this.posts = response;
    });
  }
}
