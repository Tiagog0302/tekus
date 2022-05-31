import { Component, OnInit } from '@angular/core';
import { PrecioService } from 'src/app/services/precio.service';


@Component({
  selector: 'app-lista-precios',
  templateUrl: './lista-precios.component.html',
  styleUrls: ['./lista-precios.component.css']
})
export class ListaPreciosComponent implements OnInit {
  
  Nombre1  = '';  
  Moneda1 = ''; 
  Precio1 = 0;
  Nombre2  = '';  
  Moneda2 = ''; 
  Precio2 = 0;
  Nombre3  = '';  
  Moneda3 = ''; 
  Precio3 = 0;

  constructor(private precioService: PrecioService) { }

  ngOnInit(): void {
    this.obtenerInfomacionCol();
    this.obtenerInfomacionUsd();
    this.obtenerInfomacionEur();
  }

  obtenerInfomacionCol(){
    this.precioService.getPrecioCol().subscribe(data =>{
      this.Nombre1 = data.data.base
      this.Moneda1 = data.data.currency
      this.Precio1 = data.data.amount
    },error=>{
      console.log(error);
    })
  }

  obtenerInfomacionUsd(){
    this.precioService.getPrecioUsd().subscribe(data =>{
      this.Nombre2 = data.data.base
      this.Moneda2 = data.data.currency
      this.Precio2 = data.data.amount
    },error=>{
      console.log(error);
    })
  }

  obtenerInfomacionEur(){
    this.precioService.getPrecioEur().subscribe(data =>{
      this.Nombre3 = data.data.base
      this.Moneda3 = data.data.currency
      this.Precio3 = data.data.amount
    },error=>{
      console.log(error);
    })
  }
}
