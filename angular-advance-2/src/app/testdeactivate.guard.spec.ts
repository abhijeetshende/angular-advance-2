import { TestBed } from '@angular/core/testing';

import { TestdeactivateGuard } from './testdeactivate.guard';

describe('TestdeactivateGuard', () => {
  let guard: TestdeactivateGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(TestdeactivateGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
