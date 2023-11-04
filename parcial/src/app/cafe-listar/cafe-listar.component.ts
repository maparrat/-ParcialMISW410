import { Component, OnInit } from '@angular/core';
import { Cafe } from '../model/cafe';
import { CafeService } from '../cafe.service';

@Component({
  selector: 'app-cafe-listar',
  templateUrl: './cafe-listar.component.html',
  styleUrls: ['./cafe-listar.component.scss']
})
export class CafeListarComponent implements OnInit {
  cafes: Array<Cafe> = [];
  cafeOrigen: number =0;
  cafeBlend: number =0;

  constructor(private cafeService:CafeService) { }

  ngOnInit() {
    this.getCafes();

   
  }
  calcularCafes() {
    
    for(let element of this.cafes)
    {
      
      if(element.tipo =="Café de Origen")
      {
        this.cafeOrigen+=1;
      }
      if(element.tipo =="Blend")
      {
        this.cafeBlend+=1;
      }
    };
  }
  getCafes(): void {
    this.cafeService.getCafes()
      .subscribe(cafes => {
        this.cafes = cafes;
        this.calcularCafes();
      });
     
  }


}
