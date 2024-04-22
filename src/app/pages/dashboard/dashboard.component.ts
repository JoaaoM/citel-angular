import { Component } from '@angular/core';
import {CardPessoaPorEstadoComponent} from "../../componentes/card-pessoa-por-estado/card-pessoa-por-estado.component";
import {
  CardObesidadePorSexoComponent
} from "../../componentes/card-obesidade-por-sexo/card-obesidade-por-sexo.component";
import {
  CardImcMedioPorFaixaEtariaComponent
} from "../../componentes/card-imc-medio-por-faixa-etaria/card-imc-medio-por-faixa-etaria.component";
import {
  CardDoadoresPorReceptorComponent
} from "../../componentes/card-doadores-por-receptor/card-doadores-por-receptor.component";
import {
  CardMediaIdadeParaCadaTipoSanguineoComponent
} from "../../componentes/card-media-idade-para-cada-tipo-sanguineo/card-media-idade-para-cada-tipo-sanguineo.component";
import {HlmButtonDirective} from "@spartan-ng/ui-button-helm";
import {lucideArrowLeft} from "@ng-icons/lucide";
import {provideIcons} from "@ng-icons/core";
import {Router} from "@angular/router";
import {HlmIconComponent} from "@spartan-ng/ui-icon-helm";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  providers: [provideIcons({ lucideArrowLeft })],
  imports: [CardPessoaPorEstadoComponent, CardObesidadePorSexoComponent, CardImcMedioPorFaixaEtariaComponent, CardDoadoresPorReceptorComponent, CardMediaIdadeParaCadaTipoSanguineoComponent, HlmButtonDirective, HlmIconComponent],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {

  constructor(private router: Router) { }
  navegarParaUpload() {
    this.router.navigate(['/upload']);
  }
}
