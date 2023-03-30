import { Component, OnInit } from '@angular/core';
import { User } from '../interfaces/user';
import { AuthService } from '../services/auth.service';
import { LoadingController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public userLogin: User = {};
  private loading: any;

  constructor(
    private authService: AuthService,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  async login() {
    await this.presentloading();

    try {
      await this.authService.login(this.userLogin);
      this.router.navigate(['/home']);
    } catch (error: any) {
      this.presentToast(error.message);
    } finally {
      this.loading.dismiss();
    }

  }

  async presentloading() {
    this.loading = await this.loadingCtrl.create({message: 'Por favor, aguarde...',});
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
