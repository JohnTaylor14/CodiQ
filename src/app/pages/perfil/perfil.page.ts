import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  xpAcumulado: number = 0;
  emailUsuarioLogado: string = '';

  constructor(
    private navCtrl: NavController,
    private route: ActivatedRoute,
    private afAuth: AngularFireAuth
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params: any) => {
      if (params && params.xpAcumulado) {
        this.xpAcumulado = Number(params.xpAcumulado);
      }
    });

    this.obterEmailUsuarioLogado();
  }

  async obterEmailUsuarioLogado() {
    try {
      const user = await this.afAuth.currentUser;
      if (user) {
        this.emailUsuarioLogado = user.email || '';
      }
    } catch (error) {
      console.error('Erro ao obter o email do usuário logado:', error);
    }
  }

  goToPerfil(xpAcumulado: number) {
    this.navCtrl.navigateForward(['/perfil'], { queryParams: { xpAcumulado: xpAcumulado } });
  }

  async logout() {
    try {
      console.log('Realizando logout...');
      await this.afAuth.signOut();
      console.log('Logout realizado com sucesso');
    } catch (error) {
      console.error('Erro ao fazer logout:', error);
    }
  }
}
