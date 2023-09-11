import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cta } from '../../interfaces/cta.interface';

declare let dataLayer: any[];
@Component({
  selector: 'app-cta',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cta.component.html',
  styleUrls: ['./cta.component.scss']
})
export class CtaComponent {
  @Input() ctaConfig!: Cta;

  trackButtonClick() {
    dataLayer.push({
        event: 'buttonClick',
        label: 'click on chat with Whatsapp'
    });
    // Additional code to handle the button click
}
}
