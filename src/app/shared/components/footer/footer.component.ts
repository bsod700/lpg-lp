import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Img } from '../../interfaces/img.interface';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, ContactComponent],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  @Input() componentConfig!: {
    logoImg: Img,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    contact: any,
    copyright: string
  }
}
