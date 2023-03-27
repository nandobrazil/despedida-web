import { Component, OnInit } from '@angular/core';

interface IPix {
  label: string;
  name: string;
  value: string;
  icon: string;
  text: string;
  containfo: string;
}

@Component({
  selector: 'app-gift-suggestion',
  templateUrl: './gift-suggestion.component.html',
  styleUrls: ['./gift-suggestion.component.scss']
})

export class GiftSuggestionComponent implements OnInit {

  pix: IPix[] = [
    {
      label: 'Chave Aleatória',
      value: '80d7f284-4559-4eed-9e0c-f4db8cda3ce8',
      name: 'chavealeatoria',
      icon: 'pi pi-copy',
      text: 'Copiar',
      containfo: 'NuBank - Fernando Ribeiro Conde',
    },
    {
      label: 'CPF',
      value: '064.041.401-01',
      name: 'cpf',
      icon: 'pi pi-copy',
      text: 'Copiar',
      containfo: 'NuBank - Karla Letycia Santana de Morais',
    },
    {
      label: 'Telefone',
      value: '65999772641',
      name: 'telefone',
      icon: 'pi pi-copy',
      text: 'Copiar',
      containfo: 'Itaú - Fernando Ribeiro Conde',
    },
    {
      label: 'Copia & Cola',
      value: '00020126580014BR.GOV.BCB.PIX013680d7f284-4559-4eed-9e0c-f4db8cda3ce85204000053039865802BR5922Fernando Ribeiro Conde6009SAO PAULO61080540900062240520xbgrEyngR8oyUfl2udv6630407DB',
      name: 'copiacola',
      icon: 'pi pi-copy',
      text: 'Copiar',
      containfo: 'NuBank - Fernando Ribeiro Conde',
    },
  ];

  links = [
    { label: 'R$ 100,00', link: 'https://mpago.la/1gZbxEF'},
    { label: 'R$ 200,00', link: 'https://mpago.la/21r9HzN'},
    { label: 'R$ 500,00', link: 'https://mpago.la/1iJkgW3'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

  copied(index: number) {


    this.pix[index].text = 'Copiado';
    this.pix[index].icon = 'pi pi-check';

    setTimeout(() => {
      this.pix[index].text = 'Copiar';
      this.pix[index].icon = 'pi pi-copy';
    }, 2000);
  }

}
