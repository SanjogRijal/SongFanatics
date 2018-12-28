import { TestBed } from '@angular/core/testing';

import { CreateSongService } from './create-song.service';

describe('CreateSongService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CreateSongService = TestBed.get(CreateSongService);
    expect(service).toBeTruthy();
  });
});
