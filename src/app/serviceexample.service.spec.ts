import { TestBed } from '@angular/core/testing';

import { ServiceexampleService } from './serviceexample.service';

describe('ServiceexampleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceexampleService = TestBed.get(ServiceexampleService);
    expect(service).toBeTruthy();
  });
});
