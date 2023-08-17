import { TestBed } from '@angular/core/testing';
import { FerreteriaService } from './ferreterria.service';  // Asegúrate de importar el servicio correcto

describe('FerreteriaService', () => {
  let service: FerreteriaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FerreteriaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
