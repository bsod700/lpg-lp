import { ChangeDetectionStrategy, Component, HostListener, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from '../logo/logo.component';
import { CtaComponent } from '../cta/cta.component';
import { RouterModule } from '@angular/router';
import { Cta, Img, Lang, LangComponent } from '@bsod700/lib';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, LogoComponent, CtaComponent, RouterModule, LangComponent],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  scrolled = false;
  notTop = false;
  @Input() componentConfig!: NavbarConfig;
  
   @HostListener('window:scroll', [])
   onWindowScroll() {
     this.scrolled = window.scrollY > 550;
     this.notTop = window.scrollY > 0;
   }
}

export interface NavbarConfig {
  logoImg: Img,
  cta: Cta,
  langs: Lang[]
}
