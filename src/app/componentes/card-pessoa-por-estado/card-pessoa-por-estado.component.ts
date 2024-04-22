import {Component, OnInit} from '@angular/core';
import {BarChartModule} from "@swimlane/ngx-charts";
import {
  HlmCardContentDirective,
  HlmCardDescriptionDirective,
  HlmCardDirective,
  HlmCardHeaderDirective,
  HlmCardTitleDirective
} from "@spartan-ng/ui-card-helm";
import {ActivatedRoute} from "@angular/router";
import {AnalisesService} from "../../service/analises/analises.service";
import {cardOPessoaPorEstado} from "../../models/models";

@Component({
  selector: 'app-card-pessoa-por-estado',
  standalone: true,
  imports: [
    BarChartModule,
    HlmCardDirective,
    HlmCardHeaderDirective,
    HlmCardTitleDirective,
    HlmCardDescriptionDirective,
    HlmCardContentDirective
  ],
  templateUrl: './card-pessoa-por-estado.component.html',
})
export class CardPessoaPorEstadoComponent implements OnInit{
  idDaAnalise: string | null | undefined;
  data: any[] | undefined;

  // options
  view: [number,number] = [1000, 400];
  xAxis: boolean = true;
  yAxis: boolean = true;
  xAxisLabel: string = 'UF'
  yAxisLabel: string = 'Quantidade'
  animation: boolean = true
  barPadding: number = 5
  legendTitle: string = 'UF'
  legend:boolean = true;

  constructor(
    private route: ActivatedRoute,
    private analiseService:AnalisesService
  ) {}

  ngOnInit(): void {
    this.idDaAnalise = this.route.snapshot.paramMap.get('id');
    this.analiseService.getPessoaPorEstado(this.idDaAnalise).subscribe((data: cardOPessoaPorEstado[]) => {
      this.data = data.map(item => ({ name: item.uf, value: item.quantidade }));
    });
    }
}
