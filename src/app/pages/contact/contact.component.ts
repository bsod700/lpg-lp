import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactConfigService } from './contact-config.service';
import { NavbarComponent } from 'src/app/shared/components/navbar/navbar.component';
import { FooterComponent } from 'src/app/shared/components/footer/footer.component';
import { CtaComponent } from 'src/app/shared/components/cta/cta.component';

@Component({
  selector: 'app-page-contact',
  standalone: true,
  imports: [CommonModule, NavbarComponent, FooterComponent, CtaComponent],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactPageComponent {
  contactConfigService: ContactConfigService = inject(ContactConfigService)
  config = this.contactConfigService.getPageConfig()
}
