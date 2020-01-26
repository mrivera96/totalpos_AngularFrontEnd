import { TestBed } from '@angular/core/testing';

import { DataApiServiceService } from './data-api-service.service';

describe('DataApiServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataApiServiceService = TestBed.get(DataApiServiceService);
    expect(service).toBeTruthy();
  });
});
