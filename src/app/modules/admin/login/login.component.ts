import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user!: string;
  pass!: string;

  constructor(
    private authSrv: AuthService,
    private messageSrv: MessageService
  ) { }

  ngOnInit(): void {
  }

  logIn() {
    if (this.user === 'admin' && this.pass === 'fera0209')
      this.authSrv.signIn();
    else
      this.messageSrv.add({ severity: 'error', summary: 'Erro', detail: 'Usuario ou senha incorretos.' });
  }
}
