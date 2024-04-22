import {Component, OnInit} from '@angular/core';
import {ImportacaoService} from "../../service/importacao/importacao.service";
import {DialogImportacaoComponent} from "../../componentes/dialog-importacao/dialog-importacao.component";
import {TabelaImportacaoComponent} from "../../componentes/tabela-importacao/tabela-importacao.component";
import {
  FiltragemListaImportacaoComponent
} from "../../componentes/filtragem-lista-importacao/filtragem-lista-importacao.component";
import {DashboardComponent} from "../dashboard/dashboard.component";
import {RouterModule, RouterOutlet} from "@angular/router";

interface Invoice {
  id: number;
  nomeArquivo: string;
  dataImportacao: string;
}

@Component({
  selector: 'app-upload',
  standalone: true,
  imports: [DialogImportacaoComponent, TabelaImportacaoComponent, FiltragemListaImportacaoComponent, DashboardComponent, RouterOutlet, RouterModule],
  templateUrl: './upload.component.html'
})
export class UploadComponent implements OnInit {
  invoicesList: Invoice[] = []
  invoicesBackUp: Invoice[] = []

  constructor(private importacaoService: ImportacaoService) {
  }

  ngOnInit(): void {
    this.atualizarLista();
  }

  atualizarLista(): void {
    this.importacaoService.getAllImportacoes().subscribe((data) => {
      this.invoicesList = data.reverse();
    })
  }

  onUploadSucesso(): void {
    console.log("Upload bem-sucedido, atualizando lista de importações");
    this.atualizarLista();
  }

  aplicarFiltro(valorFiltro: string) {
   if (valorFiltro) {
      this.invoicesList = this.invoicesList.filter(d => d.nomeArquivo.toUpperCase().includes(valorFiltro.toUpperCase()));
    } else {
     this.atualizarLista()
   }
  }

}
