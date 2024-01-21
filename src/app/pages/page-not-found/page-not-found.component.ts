import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundConfigService } from './page-not-found-config.service';
import { NavbarComponent } from 'src/app/shared/components/navbar/navbar.component';
import { FooterComponent } from 'src/app/shared/components/footer/footer.component';
import { CtaComponent } from 'src/app/shared/components/cta/cta.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  standalone: true,
  imports: [CommonModule, NavbarComponent, FooterComponent, CtaComponent, RouterModule],
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageNotFoundComponent {
  pageNotFoundConfigService: PageNotFoundConfigService = inject(PageNotFoundConfigService)
  config = this.pageNotFoundConfigService.getPageConfig()
}
