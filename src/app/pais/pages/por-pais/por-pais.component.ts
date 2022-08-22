import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais-interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent  {
  constructor(private paisService:PaisService){}
  termino:string='Hola Mundo'
  hayError:boolean=false;
  paises:Country[]=[];
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
  sugerencias(termino:String){
    this.hayError=false;
    //TODO: crear sugerencias 
  }
}
