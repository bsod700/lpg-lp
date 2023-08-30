import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from 'src/app/shared/components/navbar/navbar.component';
import { HeaderComponent } from 'src/app/shared/components/header/header.component';
import { AboutComponent } from 'src/app/shared/components/about/about.component';
import { OurServicesComponent } from 'src/app/shared/components/our-services/our-services.component';
import { WhyUsComponent } from 'src/app/shared/components/why-us/why-us.component';
import { FooterComponent } from 'src/app/shared/components/footer/footer.component';
import { MainConfigService } from './main-config.service';
import { BgComponent } from 'src/app/shared/components/bg/bg.component';
import { FaqComponent } from 'src/app/shared/components/faq/faq.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, NavbarComponent, HeaderComponent, AboutComponent, OurServicesComponent, WhyUsComponent, FooterComponent, BgComponent, FaqComponent],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  mainConfigService: MainConfigService = inject(MainConfigService)
  config = this.mainConfigService.getPageConfig()
}
