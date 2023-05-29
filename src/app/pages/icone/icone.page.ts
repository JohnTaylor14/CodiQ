import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IconService } from 'src/app/pages/icone/icon.service';

@Component({
  selector: 'app-icone',
  templateUrl: './icone.page.html',
  styleUrls: ['./icone.page.scss'],
})
export class IconePage implements OnInit {
  icons: string[] = [
    'assets/icon/icone/iconeA.png',
    'assets/icon/icone/icone (2).png',
    'assets/icon/icone/icone (3).png',
    'assets/icon/icone/icone (4).png',
    'assets/icon/icone/icone (5).png',
    'assets/icon/icone/icone (6).png',
    'assets/icon/icone/icone (7).png',
    'assets/icon/icone/icone (8).png'
  ];

  constructor(private router: Router, private iconService: IconService) { }

  ngOnInit() { }

  selectIcon(icon: string) {
    this.iconService.setSelectedIcon(icon);
    this.router.navigate(['/perfil']);
  }

  getIconAltText(icon: string): string {

    return "Texto alternativo do ícone";
  }
}
