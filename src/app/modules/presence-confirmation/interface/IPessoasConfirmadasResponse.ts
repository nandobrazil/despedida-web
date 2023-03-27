export interface IPessoasConfirmadasResponse {
  pessoas: {
    id: number;
    nome: string;
    quantidade_acompanhantes: number;
    data_criacao: string;
    confirmado: boolean;
  }[]
}
