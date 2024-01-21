import { ChangeDetectionStrategy, Component, Input, OnChanges, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CtaComponent } from '../cta/cta.component';
import { HeroImgComponent } from './hero-img/hero-img.component';
import { Cta, DocumentService, Img } from '@bsod700/lib';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, CtaComponent, HeroImgComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnChanges {
  @Input() componentConfig!: HeaderConfig;
   documentService: DocumentService = inject(DocumentService)

   ngOnChanges() {
    this.documentService.setInnerHtml({
      'header-h1': this.componentConfig.title
    });
   }
}

export interface HeaderConfig {
  img: Img,
  cta: Cta,
  title: string,
  paragraph: string
}
