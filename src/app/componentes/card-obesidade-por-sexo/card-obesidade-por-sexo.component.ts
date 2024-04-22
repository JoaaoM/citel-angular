import {Component, OnInit} from '@angular/core';
import {
  HlmCardContentDirective,
  HlmCardDescriptionDirective,
  HlmCardDirective,
  HlmCardFooterDirective,
  HlmCardHeaderDirective,
  HlmCardTitleDirective,
} from '@spartan-ng/ui-card-helm';
import {
  HlmCaptionComponent,
  HlmTableComponent,
  HlmTdComponent,
  HlmThComponent,
  HlmTrowComponent
} from "@spartan-ng/ui-table-helm";
import {AnalisesService} from "../../service/analises/analises.service";
import {ActivatedRoute} from "@angular/router";
import {cardObesidadePorSexo} from "../../models/models";

@Component({
  selector: 'app-card-obesidade-por-sexo',
  standalone: true,
  imports: [
    HlmCardContentDirective,
    HlmCardDescriptionDirective,
    HlmCardDirective,
    HlmCardFooterDirective,
    HlmCardHeaderDirective,
    HlmCardTitleDirective,
    HlmTableComponent,
    HlmTrowComponent,
    HlmThComponent,
    HlmTdComponent,
    HlmCaptionComponent],
  templateUrl: './card-obesidade-por-sexo.component.html',
})
export class CardObesidadePorSexoComponent implements OnInit{
  data: cardObesidadePorSexo[] | undefined ;
  idDaAnalise: string | null | undefined;

  constructor(
    private route: ActivatedRoute,
    private analiseService:AnalisesService
  ) {}
  ngOnInit(): void {
    this.idDaAnalise = this.route.snapshot.paramMap.get('id');
    this.analiseService.getCalcularObesidadePorSexo(this.idDaAnalise).subscribe( (data:cardObesidadePorSexo[]) => {
      this.data = data;
    })
  }
}
