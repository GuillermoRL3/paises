import { Component} from '@angular/core';
import { Contry } from '../../interfaces/pais-interfaces';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent{

    termino: string = "";
    hayError: boolean = false;
    paises: Contry[] = [];

    constructor(private paisService: PaisService){}
    
    buscar(termino: string){

      this.hayError = false
      this.termino = termino
;

      this.paisService.buscarPais(this.termino)
      .subscribe( (paises)=>{
        console.log(paises);
        this.paises = paises;
        



      }, (paises) =>{
        this.hayError = true;
        this.paises = [];
      });
    }

    sujerencias(termino: string){
      this.hayError = false;
      // TODO: crear sujerencias
    }
}
