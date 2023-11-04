import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CafeListarComponent } from './cafe-listar.component';
import { CafeService } from '../cafe.service';
import { of } from 'rxjs';
import { Cafe } from '../model/cafe';
import {  HttpClientModule } from '@angular/common/http';


describe('CafeListarComponent', () => {
  let component: CafeListarComponent;
  let fixture: ComponentFixture<CafeListarComponent>;
  let cafeServiceSpy: jasmine.SpyObj<CafeService>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('CafeService', ['getCafes']);
    TestBed.configureTestingModule({
      imports:[HttpClientModule],
      declarations: [ CafeListarComponent ],
      providers: [{ provide: CafeService, useValue: spy }]
    });
    fixture = TestBed.createComponent(CafeListarComponent);
    component = fixture.componentInstance;
    cafeServiceSpy = TestBed.inject(CafeService) as jasmine.SpyObj<CafeService>;
  });

  it('debería mostrar una tabla con tres filas más el encabezado', () => {
    const cafes: Cafe[] = [
      new Cafe(1, 'Café Especial La Manchuria', 'Blend', 'Salgar, Antioquia', 'Vino, Notas dulces, Frutos rojos', 1850, 'https://cdn.shopify.com/s/files/1/0272/2873/3504/products/cafe-especal-manchuria-cafe-colombiano-f_720x.png'),
      new Cafe(2, 'Café Premium Montaña', 'Origen', 'Manizales, Caldas', 'Chocolate, Caramelo, Nuez', 1700, 'https://example.com/cafe2.jpg'),
      new Cafe(3, 'Café Robusto', 'Blend', 'Medellín, Antioquia', 'Intenso, Notas de cacao, Avellana', 1600, 'https://example.com/cafe3.jpg')
    ];
    
    

    cafeServiceSpy.getCafes.and.returnValue(of(cafes));

    fixture.detectChanges();
    const filas = fixture.nativeElement.querySelectorAll('tbody tr');
    
    expect(filas.length).toBe(3); 
});
});