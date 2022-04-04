import { Component, Input} from '@angular/core';
import { Contry } from '../../interfaces/pais-interfaces';

@Component({
  selector: 'app-paises-tabla',
  templateUrl: './paises-tabla.component.html',
  styles: [
  ]
})
export class PaisesTablaComponent {

  @Input() paises: Contry[] =[]
  constructor( ) {

   }


}
