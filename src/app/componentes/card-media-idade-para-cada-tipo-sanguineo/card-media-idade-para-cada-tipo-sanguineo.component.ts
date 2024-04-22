import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {AnalisesService} from "../../service/analises/analises.service";
import {cardImcMedioPorFaixaEtaria, cardMediaIdadeParaCadaTipoSanguineo} from "../../models/models";
import {BarChartModule} from "@swimlane/ngx-charts";
import {
  HlmCardContentDirective,
  HlmCardDescriptionDirective,
  HlmCardDirective,
  HlmCardHeaderDirective,
  HlmCardTitleDirective
} from "@spartan-ng/ui-card-helm";

@Component({
  selector: 'app-card-media-idade-para-cada-tipo-sanguineo',
  standalone: true,
  imports: [
    BarChartModule,
    HlmCardDirective,
    HlmCardHeaderDirective,
    HlmCardTitleDirective,
    HlmCardDescriptionDirective,
    HlmCardContentDirective
  ],
  templateUrl: './card-media-idade-para-cada-tipo-sanguineo.component.html',
})
export class CardMediaIdadeParaCadaTipoSanguineoComponent {
  idDaAnalise: string | null | undefined;
  data: any[] | undefined;


  // options
  view: [number,number] = [1000, 400];
  xAxis: boolean = true;
  yAxis: boolean = true;
  xAxisLabel: string = 'Sorotipagem'
  yAxisLabel: string = 'Média'
  legendTitle: string = 'Sorotipagem'
  legend:boolean = true

  constructor(
    private route: ActivatedRoute,
    private analiseService:AnalisesService
  ) {}

  ngOnInit(): void {
    this.idDaAnalise = this.route.snapshot.paramMap.get('id');
    this.analiseService.getMediaDeIdadePorTipoSanguineo(this.idDaAnalise).subscribe((data: cardMediaIdadeParaCadaTipoSanguineo[]) => {
      this.data = data.map(item => ({ name: item.sorotipagem, value: item.media }));
    });
  }
}
