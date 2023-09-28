import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bullet } from '../../interfaces/bullet.interface';
import { Img } from '../../interfaces/img.interface';

@Component({
  selector: 'app-why-us',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './why-us.component.html',
  styleUrls: ['./why-us.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WhyUsComponent {
  @Input() componentConfig!: {
    title: string,
    img: Img,
    bullets: bullet[]
   };
}
