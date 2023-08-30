import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cta } from '../../interfaces/cta.interface';

@Component({
  selector: 'app-cta',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cta.component.html',
  styleUrls: ['./cta.component.scss']
})
export class CtaComponent {
  @Input() ctaConfig!: Cta;
}
