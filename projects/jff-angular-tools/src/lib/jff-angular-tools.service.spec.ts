import { TestBed } from '@angular/core/testing';

import { JffAngularToolsService } from './jff-angular-tools.service';

describe('JffAngularToolsService', () => {
  let service: JffAngularToolsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JffAngularToolsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
