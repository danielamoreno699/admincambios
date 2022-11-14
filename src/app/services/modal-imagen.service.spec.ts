import { TestBed } from '@angular/core/testing';

import { ModalImagenService } from './modal-imagen.service';

describe('ModalImagenService', () => {
  let service: ModalImagenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModalImagenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
