import { TestBed } from '@angular/core/testing';

import { AnalisesService } from './analises.service';

describe('AnalisesService', () => {
  let service: AnalisesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnalisesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
