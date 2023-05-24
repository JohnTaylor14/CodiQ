import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  xpAcumulado: number = 0;

  constructor(
    private navCtrl: NavController,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params: any) => {
      if (params && params.xpAcumulado) {
        this.xpAcumulado = Number(params.xpAcumulado);
      }
    });
  }

  goToPerfil(xpAcumulado: number) {
    this.navCtrl.navigateForward(['/perfil'], { queryParams: { xpAcumulado: xpAcumulado } });
  }

  async logout() {
    try {
      console.log('Realizando logout...');
    
      console.log('Logout realizado com sucesso');
    } catch (error) {
      console.error('Erro ao fazer logout:', error);
    }
  }
}
