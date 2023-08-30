import { TestBed } from '@angular/core/testing';

import { MainConfigService } from './main-config.service';

describe('MainConfigService', () => {
  let service: MainConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MainConfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
