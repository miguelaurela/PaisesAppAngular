import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';
import {  switchMap, tap } from 'rxjs/operators';
import { Country } from '../../interfaces/pais-interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.css']
})
export class VerPaisComponent implements OnInit {
  
  pais!:Country;
  
  constructor(
    private activatedRoute :ActivatedRoute,
    private paisService:PaisService) { }
  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
      switchMap(({id})=>this.paisService.BuscarPaisPorAlpha(id))
      ,tap(console.log)
    )
    .subscribe(pais=>{
      console.log(pais);
       this.pais=pais
    })
    
    // this.activatedRoute.params
    //   .subscribe( ({id})=>{
    //     console.log(id);
    //     this.paisService.BuscarPaisPorAlpha(id).subscribe(pais=>{
    //       console.log(pais);
    //     })
    //   })

  }

}
 