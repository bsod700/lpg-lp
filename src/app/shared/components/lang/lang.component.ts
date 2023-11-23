import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LangService } from '@bsod700/lib';
import { Lang } from '../../interfaces/lang';

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
    this.langService.setLangs(this.langs)
    const langlang = this.langService.getCurrentLang()
    this.langService.updateSelectedLang(langlang)
    this.selectedLang = this.langService.getCurrentSelectedLang()
  }


  setLang(lang: string): void {
    this.langService.updateSelectedLang(lang)
    this.selectedLang = this.langService.getCurrentSelectedLang()
  }
}
