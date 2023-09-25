import { Component, HostListener, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from '../logo/logo.component';
import { Img } from '../../interfaces/img.interface';
import { Cta } from '../../interfaces/cta.interface';
import { CtaComponent } from '../cta/cta.component';
import { RouterModule } from '@angular/router';
import { LangComponent } from '../lang/lang.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, LogoComponent, CtaComponent, RouterModule, LangComponent],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  scrolled = false;
  notTop = false;
  @Input() componentConfig!: {
    logoImg: Img,
    cta: Cta
   };

   @HostListener('window:scroll', [])
   onWindowScroll() {
     this.scrolled = window.scrollY > 550;
     this.notTop = window.scrollY > 0;
   }
}
