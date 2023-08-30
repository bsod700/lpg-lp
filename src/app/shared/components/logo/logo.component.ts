import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Img } from '../../interfaces/img.interface';

@Component({
  selector: 'app-logo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent {
  @Input() logoConfig!: Img
}
