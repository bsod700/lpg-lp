import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bullet } from '../../interfaces/bullet.interface';
import { Img } from '@bsod700/lib';

@Component({
  selector: 'app-why-us',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './why-us.component.html',
  styleUrls: ['./why-us.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WhyUsComponent {
  @Input() componentConfig!: WhyUsConfig;
}

export interface WhyUsConfig {
  title: string,
  img: Img,
  bullets: bullet[]
}
