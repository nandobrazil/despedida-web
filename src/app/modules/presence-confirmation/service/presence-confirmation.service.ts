import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { BaseService } from 'src/app/shared/services/base.service';
import { IPessoasConfirmadasRequest } from '../interface/IPessoasConfirmadasRequest';
import { IPessoasConfirmadasResponse } from '../interface/IPessoasConfirmadasResponse';

@Injectable({
  providedIn: 'root'
})
export class PresenceConfirmationService  extends BaseService<IPessoasConfirmadasRequest | IPessoasConfirmadasResponse> {

    constructor(
      @Inject(HttpClient) http: HttpClient,
      @Inject(ConfirmationService) confirmationService: ConfirmationService,
    ) {
      super('pessoasconfirmadas', http, confirmationService);
    }

}
