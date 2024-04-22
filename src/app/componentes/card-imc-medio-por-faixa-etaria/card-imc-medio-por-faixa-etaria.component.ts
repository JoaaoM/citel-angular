import {Component, OnInit} from '@angular/core';
import {BarChartModule} from "@swimlane/ngx-charts";
import {ActivatedRoute} from "@angular/router";
import {AnalisesService} from "../../service/analises/analises.service";
import {cardImcMedioPorFaixaEtaria} from "../../models/models";
import {
  HlmCardContentDirective, HlmCardDescriptionDirective,
  HlmCardDirective,
  HlmCardHeaderDirective,
  HlmCardTitleDirective
} from "@spartan-ng/ui-card-helm";

@Component({
  selector: 'app-card-imc-medio-por-faixa-etaria',
  standalone: true,
  imports: [
    BarChartModule,
    HlmCardDirective,
    HlmCardHeaderDirective,
    HlmCardTitleDirective,
    HlmCardContentDirective,
    HlmCardDescriptionDirective
  ],
  templateUrl: './card-imc-medio-por-faixa-etaria.component.html',
})
export class CardImcMedioPorFaixaEtariaComponent implements OnInit{
  idDaAnalise: string | null | undefined;
  data: any[] | undefined;


  // options
  view: [number,number] = [1000, 400];
  xAxis: boolean = true;
  yAxis: boolean = true;
  xAxisLabel: string = 'Anos'
  yAxisLabel: string = 'Média'
  legendTitle: string = 'Anos'
  legend:boolean = true

  constructor(
    private route: ActivatedRoute,
    private analiseService:AnalisesService
  ) {}

  ngOnInit(): void {
    this.idDaAnalise = this.route.snapshot.paramMap.get('id');
    this.analiseService.getImcMedioPorFaixaEtariaDeIdadeDeDezEmDezAnos(this.idDaAnalise).subscribe((data: cardImcMedioPorFaixaEtaria[]) => {
      this.data = data.map(item => ({ name: item.faixa, value: item.imc }));
    });
  }

}
