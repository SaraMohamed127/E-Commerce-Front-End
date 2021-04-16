import { TestBed } from '@angular/core/testing';

import { ShopservicesService } from './shopservices.service';

describe('ShopservicesService', () => {
  let service: ShopservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShopservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
