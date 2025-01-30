import { TestBed } from '@angular/core/testing';

import { PostsDataServiceService } from './posts-data-service.service';

describe('PostsDataServiceService', () => {
  let service: PostsDataServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostsDataServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
