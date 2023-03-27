import { Component, OnInit } from '@angular/core';
import { IPessoasConfirmadasResponse } from '../../presence-confirmation/interface/IPessoasConfirmadasResponse';
import { PresenceConfirmationService } from '../../presence-confirmation/service/presence-confirmation.service';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {

  pessoasConfirmadasList: any;

  totalRecords = 0;
  totalAcompanhantes = 0;
  constructor(
    private presenceConfirmationSrv: PresenceConfirmationService
  ) { }

  ngOnInit(): void {
    this.loadPessoasConfirmadas();
  }

  async loadPessoasConfirmadas() {
    const { success, data }= await this.presenceConfirmationSrv.GetAllPessoas();
    if (success) {
      this.pessoasConfirmadasList = data.pessoas as IPessoasConfirmadasResponse;
      this.totalRecords = data.pessoas.length;

      data.pessoas.forEach((element: any) => {
        this.totalAcompanhantes += element.quantidade_acompanhantes;
      });
    }
  }

}
