import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { BaseService } from 'src/app/shared/services/base.service';
import { IPessoasConfirmadasRequest } from '../interface/IPessoasConfirmadasRequest';
import { IPessoasConfirmadasResponse } from '../interface/IPessoasConfirmadasResponse';
import { IHttpResult } from 'src/app/shared/interfaces/IHttpResult';
import { lastValueFrom } from 'rxjs';
import { PrepareHttpQuery } from 'src/app/shared/utils/query.utils';
import { IQueryOptions } from 'src/app/shared/interfaces/IQueryOptions';

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


    async GetAllPessoas(): Promise<IHttpResult<any>> {
      return lastValueFrom(this.http.get<IHttpResult<any>>(`${this.urlBase}`));
    }

}
