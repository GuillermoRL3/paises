import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PorCapitalComponent } from './pages/por-capital/por-capital.component';
import { PorPaisComponent } from './pages/por-pais/por-pais.component';
import { PorRegionComponent } from './pages/por-region/por-region.component';
import { VerPaisComponent } from './pages/ver-pais/ver-pais.component';
import {  RouterModule } from '@angular/router';
import { PaisesTablaComponent } from './components/paises-tabla/paises-tabla.component';
import { PaisesInputComponent } from './components/paises-input/paises-input.component';
import { CapitalTablaComponent } from './components/capital-tabla/capital-tabla.component';




@NgModule({
  declarations: [
    PorCapitalComponent,
    PorPaisComponent,
    PorRegionComponent,
    VerPaisComponent,
    PaisesTablaComponent,
    PaisesInputComponent,
    CapitalTablaComponent,

  ],
  exports:[
    PorCapitalComponent,
    PorPaisComponent,
    PorRegionComponent,
    VerPaisComponent,
    PaisesTablaComponent,

  ],
  imports: [
    FormsModule,
    CommonModule,
    RouterModule
  ]
})
export class PaisModule { }
