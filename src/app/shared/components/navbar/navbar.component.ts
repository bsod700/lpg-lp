import { ChangeDetectionStrategy, Component, HostListener, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from '../logo/logo.component';
import { CtaComponent } from '../cta/cta.component';
import { RouterModule } from '@angular/router';
import { LangComponent } from '../lang/lang.component';
import { Cta, Img } from '@bsod700/lib';

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
