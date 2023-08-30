import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PostsComponent } from '../Components/Posts/posts.component';
import { PostsModule } from '../Components//Posts/posts.module';

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
    //@ts-ignore
    expect(component).toBeTruthy();
  });
});
