import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais-interface';
import { PaisModule } from '../../pais.module';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  // styleUrls: ['./por-pais.component.css']
  styles: [
    `
    li{
      cursor:pointer;
    }
    `
  ]
})
export class PorPaisComponent  {
  constructor(private paisService:PaisService){}

  termino:string='Hola Mundo'
  hayError:boolean=false;
  paises:Country[]=[];

  paisesSugeridos:Country[]=[];
  mostrarSugerencias=false

  buscar(terminoInput:string){
    // console.log(this.termino);
    
    this.hayError = false;
    this.termino  = terminoInput;
    
    this.paisService.BuscarPais(this.termino)
    .subscribe(paises=>{
      console.log(paises);
      this.paises=paises;
      this.hayError=false;

    },(err)=>{
      this.hayError=true;
      this.paises  =[]
    })
    
  }
  sugerencias(termino:string){
    this.hayError=false;
    this.termino=termino;
    this.mostrarSugerencias=true;
    this.paisService.BuscarPais(termino)
    .subscribe(
      paises=>this.paisesSugeridos=paises.slice(0,5),
      (err)=>this.paisesSugeridos=[]
      )
  }
  buscarSugerido(termino:string){
    this.buscar(termino);
    this.mostrarSugerencias=false;
  }
}
