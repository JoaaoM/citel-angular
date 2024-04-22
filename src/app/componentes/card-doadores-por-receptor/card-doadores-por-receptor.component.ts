import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {AnalisesService} from "../../service/analises/analises.service";
import {cardDoadoresPorReceptor, cardImcMedioPorFaixaEtaria} from "../../models/models";
import {BarChartModule} from "@swimlane/ngx-charts";
import {
  HlmCardContentDirective,
  HlmCardDescriptionDirective,
  HlmCardDirective,
  HlmCardHeaderDirective,
  HlmCardTitleDirective
} from "@spartan-ng/ui-card-helm";

@Component({
  selector: 'app-card-doadores-por-receptor',
  standalone: true,
  imports: [
    BarChartModule,
    HlmCardDirective,
    HlmCardHeaderDirective,
    HlmCardTitleDirective,
    HlmCardDescriptionDirective,
    HlmCardContentDirective
  ],
  templateUrl: './card-doadores-por-receptor.component.html',
})
export class CardDoadoresPorReceptorComponent {
  idDaAnalise: string | null | undefined;
  data: any[] | undefined;


  // options
  view: [number,number] = [700, 540];
  xAxis: boolean = true;
  yAxis: boolean = true;
  xAxisLabel: string = 'UF'
  yAxisLabel: string = 'Quantidade'
  legendTitle: string = 'UF'
  legend:boolean = true

  constructor(
    private route: ActivatedRoute,
    private analiseService:AnalisesService
  ) {}

  ngOnInit(): void {
    this.idDaAnalise = this.route.snapshot.paramMap.get('id');
    this.analiseService.getQuantidadeDeDoadoresPorTipoSanguineo(this.idDaAnalise).subscribe((data: cardDoadoresPorReceptor[]) => {
      this.data = data.map(item => ({ name: item.sorotipagem, value: item.quantidade }));
      console.log(data);
    });
  }
}
