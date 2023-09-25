import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lang } from '../../interfaces/lang';
import { LangService } from '../../lang.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lang',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lang.component.html',
  styleUrls: ['./lang.component.scss']
})
export class LangComponent implements OnInit {
  langService: LangService = inject(LangService)
  router: Router = inject(Router)
  currentLang: string = 'he';
  selectedLang!: Lang;
  langs: Lang[] = [
    {
      img: 'assets/imgs/langs/he.webp',
      name: 'he',
      title: 'עברית',
      selected: false
    },
    {
      img: 'assets/imgs/langs/us.webp',
      name: 'us',
      title: 'English',
      selected: false
    }
  ]

  ngOnInit() {
    this.getCurrentLang()
  }

  getCurrentLang(): void {
    this.langService.getLang().subscribe((currentLang) => {
      this.currentLang = currentLang
      this.selectedLang = this.langs.find((lang) => lang.name === currentLang) || this.langs[0]
      this.langs.forEach((lang) => {
        lang.selected = lang.name === currentLang;
      })
    });
  }
  setLang(lang: string): void {
    this.langService.setLang(lang)
    this.router.navigate([], {
      queryParams: { lang },
      queryParamsHandling: 'merge' 
    });
  }
}
