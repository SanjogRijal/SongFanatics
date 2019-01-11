import { TestBed } from '@angular/core/testing';

import { CreateArtistService } from './create-artist.service';

describe('CreateArtistService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CreateArtistService = TestBed.get(CreateArtistService);
    expect(service).toBeTruthy();
  });
});
