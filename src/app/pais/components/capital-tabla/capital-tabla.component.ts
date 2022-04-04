import { Component, Input} from '@angular/core';
import { Contry } from '../../interfaces/pais-interfaces';

@Component({
  selector: 'app-capital-tabla',
  templateUrl: './capital-tabla.component.html',
  styles: [
  ]
})
export class CapitalTablaComponent {

  @Input() capital: Contry[]=[]
  constructor() { }


}
