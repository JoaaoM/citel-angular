import {Component, Input} from '@angular/core';
import {
  HlmCaptionComponent,
  HlmTableComponent,
  HlmTdComponent,
  HlmThComponent,
  HlmTrowComponent,
} from '@spartan-ng/ui-table-helm';
import {HlmButtonDirective} from "@spartan-ng/ui-button-helm";
import {HlmSpinnerComponent} from "@spartan-ng/ui-spinner-helm";
import {HlmIconComponent} from "@spartan-ng/ui-icon-helm";
import {provideIcons} from "@ng-icons/core";
import {lucideLineChart} from "@ng-icons/lucide";
import {Router} from "@angular/router";

interface Invoice {
  id: number;
  nomeArquivo:string;
  dataImportacao:string;
}

@Component({
  selector: 'app-tabela-importacao',
  standalone: true,
  imports: [HlmTableComponent, HlmTrowComponent, HlmThComponent, HlmTdComponent, HlmCaptionComponent, HlmButtonDirective,HlmSpinnerComponent,HlmIconComponent],
  providers: [provideIcons({ lucideLineChart })],
  templateUrl: './tabela-importacao.component.html',
})
export class TabelaImportacaoComponent {
  @Input() invoices: Invoice[] = [];

  constructor(private router: Router) { }

  navegarParaDashboard(id: number) {
    this.router.navigate(['/dashboard', id]);
  }
}
