import { Injectable } from '@angular/core';
import { Img } from 'src/app/shared/interfaces/img.interface';

@Injectable({
  providedIn: 'root'
})
export class ContactConfigService {

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
        img: {
          src: 'assets/imgs/header-img.webp',
          alt: 'WOW',
        },
        cta: {
          text: 'התחילו עכשיו!',
          size: 'big',
          color: 'primery',
        },
        title: 'כי כל קמפיין צריך נחיתה טובה',
        paragraph: 'ניהול קמפיינים ועמודי נחיתה בצורה חכמה ויעילה, אינטגרציה חלקה עם גוגל אדס ועמודי נחיתה מתבנית או מותאמים אישית עם מתכנת.'
      },
      footer: {
        contact: {
          title: 'מעוניינים?',
          subtitle: 'השאירו פרטים',
          form: {
            name: {
              text: 'מה שמך?',
              lable: 'שם',
              error: 'מלאו את השם בבקשה'
            },
            email: {
              text: 'מה כתובת המייל שלך?',
              lable: 'אימייל',
              error: 'מלאו את כתובת האימייל בבקשה'
            },
            phone: {
              text: 'מה הטלפון שלך?',
              lable: 'טלפון',
              error: 'מלאו את הטלפון בבקשה'
            },
            submit: 'צרו איתי קשר!',
          },
          message: {
            title: "תודה על פניתך",
            subtitle: "ההודעה שלך התקבלה בהצלחה! ניהיה בקשר:)"
          },
          logo: {
            src: 'assets/imgs/logo.svg',
            alt: 'landerX',
          }
        },
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
