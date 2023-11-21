import { TestBed } from '@angular/core/testing';

import { AdminParkingService } from './admin-parking.service';

describe('AdminParkingService', () => {
  let service: AdminParkingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminParkingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
