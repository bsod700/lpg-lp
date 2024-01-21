import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from 'src/app/shared/components/navbar/navbar.component';
import { HeaderComponent } from 'src/app/shared/components/header/header.component';
import { AboutComponent } from 'src/app/shared/components/about/about.component';
import { OurServicesComponent } from 'src/app/shared/components/our-services/our-services.component';
import { WhyUsComponent } from 'src/app/shared/components/why-us/why-us.component';
import { FooterComponent } from 'src/app/shared/components/footer/footer.component';
import { MainConfigService, MainPageConfig } from './main-config.service';
import { FaqComponent } from 'src/app/shared/components/faq/faq.component';
import { LangService, PageService } from '@bsod700/lib';
// import { PageService } from 'src/app/services/page.service';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, NavbarComponent, HeaderComponent, AboutComponent, OurServicesComponent, WhyUsComponent, FooterComponent, FaqComponent],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent implements OnInit {
  private langService: LangService = inject(LangService)
  private mainConfigService: MainConfigService = inject(MainConfigService)
  private pageService: PageService = inject(PageService)
  config!: MainPageConfig;

  ngOnInit() {
    this.config = this.mainConfigService.getPageConfig()
    this.getCurrentLang()
    this.pageService.setPageConfig('main', this.mainConfigService.getPageLanguages())
  }

  getCurrentLang(): void {
    this.langService.getLang().subscribe((currentLang) => {
      this.config = currentLang === 'he' ? this.mainConfigService.getPageConfig() : this.mainConfigService.getPageConfigEnglish()
    });
  }
}
