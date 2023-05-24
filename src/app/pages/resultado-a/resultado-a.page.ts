import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-resultado-a',
  templateUrl: './resultado-a.page.html',
  styleUrls: ['./resultado-a.page.scss'],
})
export class ResultadoAPage implements OnInit {
  correctAnswers: number = 0;
  xpAcumulado: number = 0;

  constructor(private navCtrl: NavController, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params && params['correctAnswers']) {
        this.correctAnswers = Number(params['correctAnswers']);
        this.xpAcumulado += this.correctAnswers * 100;
      }
    });
  }

  goToPerfil() {
    this.router.navigate(['/perfil'], { state: { xpAcumulado: this.xpAcumulado } });
  }

  goHome() {
    this.goToPerfil();
  }
}
