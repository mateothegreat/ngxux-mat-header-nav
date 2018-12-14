import { TestBed } from '@angular/core/testing';

import { NgxuxMatHeaderNavService } from './ngxux-mat-header-nav.service';

describe('NgxuxMatHeaderNavService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxuxMatHeaderNavService = TestBed.get(NgxuxMatHeaderNavService);
    expect(service).toBeTruthy();
  });
});
