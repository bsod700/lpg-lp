import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { card } from '../../interfaces/card.interface';

@Component({
  selector: 'app-our-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './our-services.component.html',
  styleUrls: ['./our-services.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OurServicesComponent {
  @Input() componentConfig!: {
    title: string,
    subtitle: string,
    cards: card[]
   };
}
