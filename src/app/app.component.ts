import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { GoogleTagService, LangService, RouteService } from '@bsod700/lib';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  title = 'lpg';
  private langService: LangService = inject(LangService)
  private routeService: RouteService = inject(RouteService)
  private googleTagService: GoogleTagService = inject(GoogleTagService)
  
  ngOnInit(): void {
    this.langService.subscribeToQueryParams();
    this.initializeGtm();
    this.routeService.getCurrentPage().subscribe(pageName => {
      this.trackPage(pageName)
    })
  }

  trackPage(pageName: string = 'home'): void {
    this.googleTagService.trackPage(pageName)
  }

  private initializeGtm() {
    this.googleTagService.initializeGtm(environment.gtmId)
  }
}
