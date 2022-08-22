import { Component,  } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais-interface';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles:[`
    button{
      margin-right:5px;
    }`
  ]
})
export class PorRegionComponent  {
  paises:Country[]=[]
  regiones:string[]=['EU','EFTA','CARICOM','PA','AU','USAN','EEU','AL','ASEAN','CAIS','CEFTA','NAFTA','SAARC'];
  regionActiva:string='';
  constructor(private paisService:PaisService) { }
  getClaseCss(region:string):string{
    return (this.regionActiva===region)?'btn btn-primary':'btn btn.outline-primary';
  }
  activarRegion(region:string){
    if (region===this.regionActiva) {return;}
    this.regionActiva=region;
    this.paises=[];
    this.paisService.BuscarRegion(region)
    .subscribe(paises=>{
      console.log(paises);
      this.paises=paises
    })
  }

   

}
