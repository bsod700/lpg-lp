import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from '../contact/contact.component';
import { Img } from '@bsod700/lib';

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
  messageIsSent: boolean = false
  sentMessage(isSent: boolean) {
    this.messageIsSent = isSent
  }
}
