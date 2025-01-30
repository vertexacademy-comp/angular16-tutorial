import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsDataComponent } from './posts-data.component';

describe('PostsDataComponent', () => {
  let component: PostsDataComponent;
  let fixture: ComponentFixture<PostsDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostsDataComponent]
    });
    fixture = TestBed.createComponent(PostsDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
