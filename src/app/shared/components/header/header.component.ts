import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Img } from '../../interfaces/img.interface';
import { Cta } from '../../interfaces/cta.interface';
import { CtaComponent } from '../cta/cta.component';
import { HeroImgComponent } from './hero-img/hero-img.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, CtaComponent, HeroImgComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  @Input() componentConfig!: {
    img: Img,
    cta: Cta,
    title: string,
    paragraph: string
   };
}
