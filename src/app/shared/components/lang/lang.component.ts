import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lang, LangService } from '@bsod700/lib';

@Component({
  selector: 'app-lang',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lang.component.html',
  styleUrls: ['./lang.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LangComponent implements OnInit {
  langService: LangService = inject(LangService)
  selectedLang!: Lang
  langs: Lang[] = [
    {
      img: 'assets/imgs/langs/he.webp',
      name: 'he',
      title: 'עברית',
      selected: false
    },
    {
      img: 'assets/imgs/langs/us.webp',
      name: 'en',
      title: 'English',
      selected: false
    }
  ]

  ngOnInit() {
    this.selectedLang = this.langService.initSelectLang(this.langs)
  }


  setLang(lang: string): void {
    this.selectedLang = this.langService.updateLang(lang)
  }
}
