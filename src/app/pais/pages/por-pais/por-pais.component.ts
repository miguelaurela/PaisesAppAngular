import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent  {
  constructor(private paisService:PaisService){}
  termino:string='Hola Mundo'
  hayError:boolean=false;
  buscar(){
    console.log(this.termino);
    this.paisService.BuscarPais(this.termino)
    .subscribe(resp=>{
      console.log(resp);
    },(err)=>{
      this.hayError=true;
    })
  }
}
