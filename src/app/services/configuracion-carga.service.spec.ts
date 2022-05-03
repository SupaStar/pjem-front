import { TestBed } from '@angular/core/testing';

import { ConfiguracionCargaService } from './configuracion-carga.service';

describe('ConfiguracionCargaService', () => {
  let service: ConfiguracionCargaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConfiguracionCargaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
