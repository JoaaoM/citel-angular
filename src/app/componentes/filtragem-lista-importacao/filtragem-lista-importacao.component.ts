import {Component, EventEmitter, Output} from '@angular/core';
import {HlmInputDirective} from "@spartan-ng/ui-input-helm";
import {HlmButtonDirective} from "@spartan-ng/ui-button-helm";
import {HlmIconComponent} from "@spartan-ng/ui-icon-helm";
import {HlmSpinnerComponent} from "@spartan-ng/ui-spinner-helm";
import {provideIcons} from "@ng-icons/core";
import {lucideSearch} from "@ng-icons/lucide";

interface Invoice {
  id: number;
  nomeArquivo: string;
  dataImportacao: string;
}

@Component({
  selector: 'app-filtragem-lista-importacao',
  standalone: true,
  imports: [HlmInputDirective, HlmButtonDirective, HlmSpinnerComponent, HlmIconComponent],
  providers: [provideIcons({lucideSearch})],
  templateUrl: './filtragem-lista-importacao.component.html',

})
export class FiltragemListaImportacaoComponent {
  @Output() filtro = new EventEmitter<string>();

  filtrar(valorFiltro: string) {
    this.filtro.emit(valorFiltro);
  }
}
