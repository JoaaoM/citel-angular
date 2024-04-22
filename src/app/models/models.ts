export interface cardObesidadePorSexo {
  sexo: string;
  populacaoTotal: number;
  populacaoObesa: number;
  percentual: number;
}

export interface cardOPessoaPorEstado {
  uf: string;
  quantidade: number;
}

export interface cardImcMedioPorFaixaEtaria {
  faixa: string;
  imc: number;
}

export interface cardMediaIdadeParaCadaTipoSanguineo {
  sorotipagem: string;
  media: number;
}

export interface cardDoadoresPorReceptor {
  sorotipagem: string;
  quantidade: number;
}

