import { TestBed } from '@angular/core/testing';
import { certificationService } from './certification.service';
describe('CertificationService', () => {
  let service: certificationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(certificationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
