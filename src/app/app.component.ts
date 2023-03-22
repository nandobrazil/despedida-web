import { Component } from '@angular/core';
import { AuthService } from './shared/services/auth.service';
import { LoadingService } from './shared/services/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  loading!: boolean;
  isLogged: boolean;
  constructor(
    private authService: AuthService,
    private loadingSrv: LoadingService
  ) {
    this.isLogged = this.authService.isLogged();
    this.loadingSrv.isLoading().subscribe(load => this.loading = load);
  }
}
