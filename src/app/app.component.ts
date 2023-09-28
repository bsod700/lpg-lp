import { ChangeDetectionStrategy, Component, OnInit, Renderer2, inject } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { LangService } from './shared/lang.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  title = 'lpg';
  route: ActivatedRoute = inject(ActivatedRoute)
  router: Router = inject(Router)
  langService: LangService = inject(LangService)
  renderer: Renderer2 = inject(Renderer2)
  document: Document = inject(DOCUMENT)

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const currentLang = this.langService.getCurrentLang()
      const lang = params['lang'] || currentLang;
      this.langService.setLang(lang)
      this.setHtmlLangAndDir(lang);
    });

    this.langService.getLang().subscribe((lang) => {
      this.setHtmlLangAndDir(lang);
    });
  }

  private setHtmlLangAndDir(lang: string) {
    this.renderer.setAttribute(this.document.documentElement, 'lang', lang);
    const dir = lang === 'he' ? 'rtl' : 'ltr';
    this.renderer.setAttribute(this.document.body, 'dir', dir);
  }
}
