import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthGuardService } from './auth-guard-child.service';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage implements OnInit {

  form: FormGroup;

  constructor(
    private router: Router,
    private authService: AuthGuardService,
    private alertController: AlertController
  ) { }

  ngOnInit() {
    this.buildForm();
    if (sessionStorage.getItem('email') && sessionStorage.getItem('senha')) {
      this.form.patchValue({
        email: sessionStorage.getItem('email'),
        senha: sessionStorage.getItem('senha')
      });
      this.form.disable();
      this.logar();
    }
  }

  buildForm() {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      senha: new FormControl('', Validators.required),
    });
  }

  logar() {
    this.authService.logar(this.form.getRawValue())
      .subscribe(async (rs: any[]) => {
        if (rs.length === 1) {
          this.authService.user = rs[0];
          this.authService.setAuthenticated(true);
          this.router.navigate(['/home']);
          sessionStorage.setItem('email', this.form.get('email').value);
          sessionStorage.setItem('senha', this.form.get('senha').value);
        } else {
          const alert = await this.alertController.create({
            header: '',
            message: 'Usuário ou senha inválidos!<br>Por favor tente novamente',
            buttons: [
              {
                text: 'Ok',
                role: 'cancel',
                cssClass: 'primary'
              }
            ]
          });
          await alert.present();
        }
      });
  }
}
