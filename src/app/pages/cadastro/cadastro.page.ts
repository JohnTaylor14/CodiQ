import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';
import { User } from '../interfaces/user';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {
  public userRegister: User = {};
  private loading: any;
  private error: any;

  constructor(
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private AuthService: AuthService
  ) {}

  ngOnInit() {}

  async register() {
    await this.presentloading();

    try {
      await this.AuthService.register(this.userRegister);
    } catch (error: any) {
      let message = 'Este e-mail é inválido';
      switch (error.code) {
        case 'auth/email-already-in-use':
          message = 'Este e-mail já está em uso';
          break;

        case 'auth/invalid-email':
          message = 'Este e-mail é inválido';
          break;
      }
      this.presentToast(message);
    } finally {
      this.loading.dismiss();
    }
  }

  async presentloading() {
    this.loading = await this.loadingCtrl.create({
      message: 'Por favor, aguarde...',
    });

    return this.loading.present();
  }

  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 1500,
    });
    await toast.present();
  }
}
