import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfiguracionCargaFormularioComponent } from './configuracion-carga-formulario.component';

describe('ConfiguracionCargaFormularioComponent', () => {
  let component: ConfiguracionCargaFormularioComponent;
  let fixture: ComponentFixture<ConfiguracionCargaFormularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfiguracionCargaFormularioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfiguracionCargaFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
