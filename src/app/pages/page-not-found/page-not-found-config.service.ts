import { Injectable } from '@angular/core';
import { Img } from '@bsod700/lib';

@Injectable({
  providedIn: 'root'
})
export class PageNotFoundConfigService {

  getLogo(): Img {
    return {
      src: 'assets/imgs/logo.svg',
        alt: 'landerX',
    }
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  getPageConfig(): any {
    return {
      navbar: {
        logoImg: {
          src: 'assets/imgs/logo.svg',
          alt: 'landerX',
        },
        cta: {
          text: 'התחילו עכשיו!',
          size: 'small',
          color: 'primery',
        },
      },
      header: {
        title: 'מיקום נחיתה לא קיים',
        subtitle: 'הגעת ליעד הלא נכון 404',
        cta: {
          text: 'חישוב מסלול מחדש',
          link: ''
        }
      },
      footer: {
        contact: false,
        logoImg: {
          src: 'assets/imgs/logo.svg',
          alt: 'landerX',
        },
        copyright:
          '©2023 LanderX. All rights reserved. The content on this landing page, including text, images, videos, and design, is protected by copyright and may not be used without the express permission of LanderX.',
      },
    }
  }
}
