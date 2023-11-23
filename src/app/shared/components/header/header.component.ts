import { ChangeDetectionStrategy, Component, Input, OnChanges, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Img } from '../../interfaces/img.interface';
import { Cta } from '../../interfaces/cta.interface';
import { CtaComponent } from '../cta/cta.component';
import { HeroImgComponent } from './hero-img/hero-img.component';
import { DocumentService } from '@bsod700/lib';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, CtaComponent, HeroImgComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnChanges {
  @Input() componentConfig!: {
    img: Img,
    cta: Cta,
    title: string,
    paragraph: string
   };
   documentService: DocumentService = inject(DocumentService)

   ngOnChanges() {
    this.documentService.setInnerHtml({
      'header-h1': this.componentConfig.title
    });
   }
}
