import { TestBed } from '@angular/core/testing';

import { RegExprService } from './reg-expr.service';

describe('RegExprService', () => {
  let service: RegExprService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegExprService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
