import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { PresenceConfirmationService } from '../service/presence-confirmation.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-presence-confirmation',
  templateUrl: './presence-confirmation.component.html',
  styleUrls: ['./presence-confirmation.component.scss']
})
export class PresenceConfirmationComponent implements OnInit {

  hasLogin = true;
  formGuests!: FormGroup;

  euVou: boolean = true;
  name!: string;
  numberEscort: number = 0;

  constructor(
    private presenceConfirmationService: PresenceConfirmationService,
    private messageService: MessageService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  async sendPresenceConfirmation() {
    if (!this.name || this.numberEscort === null) {
      this.messageService.add({severity:'warn', summary:'Por favor', detail:'Por favor, preencha seu nome e a quantidade de acompanhantes.'});
      return;
    }

    const sender = {
      nome: this.name,
      quantidade_acompanhantes: this.numberEscort,
      confirmado: this.euVou
    };
    const { success, data } = await this.presenceConfirmationService.post(sender);
    if (success) {
      this.messageService.add({severity:'success', summary:'Sucesso', detail:'Confirmação enviada com sucesso!'});
      this.router.navigate(['/confirmed'])
    }
  }

}
