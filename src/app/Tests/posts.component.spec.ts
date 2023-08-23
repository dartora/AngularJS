import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { PostsComponent } from '../Pages/Posts/posts.component';
import { PostsModule } from '../Pages/Posts/posts.module';

describe('PostsComponent', () => {
  let component: PostsComponent;
  let fixture: ComponentFixture<PostsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostsComponent],
      imports: [PostsModule],
    });
    fixture = TestBed.createComponent(PostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
