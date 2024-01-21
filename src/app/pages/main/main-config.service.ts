import { Injectable } from '@angular/core';
import { Img, Lang } from '@bsod700/lib';
import { AboutConfig } from 'src/app/shared/components/about/about.component';
import { FaqConfig } from 'src/app/shared/components/faq/faq.component';
import { FooterConfig } from 'src/app/shared/components/footer/footer.component';
import { HeaderConfig } from 'src/app/shared/components/header/header.component';
import { NavbarConfig } from 'src/app/shared/components/navbar/navbar.component';
import { OurServicesConfig } from 'src/app/shared/components/our-services/our-services.component';
import { WhyUsConfig } from 'src/app/shared/components/why-us/why-us.component';

@Injectable({
  providedIn: 'root'
})
export class MainConfigService {

  getLogo(): Img {
    return {
      src: 'assets/imgs/logo.svg',
        alt: 'landerX',
    }
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  getPageConfig(): MainPageConfig {
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
        langs: this.getPageLanguages()
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
        title: 'כי כל סטרטאפ צריך נחיתה טובה',
        paragraph: 'ניהול קמפיינים ועמודי נחיתה בצורה חכמה ויעילה, אינטגרציה חלקה עם גוגל אדס ועמודי נחיתה מותאמים אישית עם מתכנת.'
      },
      about: {
        title: 'התמורה הטובה ביותר להשקעה שלכם',
        subtitle: 'קצת עלינו',
        paragraph: [
          'המשימה שלנו היא להפוך את הקמפיינים שלכם למוצלחים ויעילים ככל האפשר. אנחנו מאמינים בשילוב של טכנולוגיה, AI, עיצוב ושיווק דיגיטלי כדי להביא לכם את התוצאות הטובות ביותר.',
          'אנחנו חברה צעירה ודינמית שמתמחה בבניית עמודי נחיתה מהירים ומעוצבים, ובניהול קמפיינים ממומנים בגוגל.',
          'אנחנו גאים במחירים התחרותיים שלנו, ומחויבים להציע לכם שירות מקצועי ואישי. אצלנו, אתם לא רק לקוחות - אתם שותפים.'
        ]
      },
      ourServices: {
        title: 'מה אנחנו עושים?',
        subtitle: 'השירותים שלנו',
        cards: [
          {
            img: {
              src: 'assets/imgs/services-lp.webp',
              alt: 'בניית עמודי נחיתה מעוצבים',
            },
            title: 'בניית עמודי נחיתה מעוצבים',
            paragraph: 'מותאמים אישים עם מתכנת בטכנולוגיה הכי מתקדמת, ושימוש ב-AI. הגברת המרות על ידי חיבור למערכת גוגל אדס.'
          },
          {
            img: {
              src: 'assets/imgs/services-ad.webp',
              alt: 'ניהול קמפיינים ממומנים בגוגל',
            },
            title: 'ניהול קמפיינים ממומנים בגוגל',
            paragraph: 'אנו מנהלים את הקמפיינים שלכם בגוגל באופן מקצועי, כדי להבטיח שאתם מקבלים את התמורה הטובה ביותר להשקעה שלכם.'
          },
          {
            img: {
              src: 'assets/imgs/services-lids.webp',
              alt: 'ייצור לידים',
            },
            title: 'ייצור לידים',
            paragraph: 'השילוב של טכנולוגיה מתקדמת, AI ואינטגרציה חלקה עם גוגל אדס מאפשר לנו לייצר לכם לידים איכותיים בצורה אוטומטית ויעילה.'
          },
          {
            img: {
              src: 'assets/imgs/services-prices.webp',
              alt: 'מיקרו קופי',
            },
            title: 'קופי ומיקרו קופי',
            paragraph: 'אין צורך לחפש כתיבה חיצונית או להתמודד עם תוכן לא מדויק. אנו מייצרים את הקופי והמיקרו-קופי לעמוד הנחיתה ולקמפיינים שלכם.'
          },
          {
            img: {
              src: 'assets/imgs/services-self.webp',
              alt: 'תכנות ומהירות',
            },
            title: 'תכנות ומהירות',
            paragraph: 'עמודי הנחיתה שלנו מותאמים לטעינה מהירה בעזרת קוד יעיל ומתוחזק עם מתכנת בכיר בצוות, כך שלקוחותיכם לא יחכו.'
          },
          {
            img: {
              src: 'assets/imgs/services-settings.webp',
              alt: 'אחזקה ותמיכה טכנית',
            },
            title: 'אחזקה ותמיכה טכנית',
            paragraph: 'אנו מספקים ללקוחותינו מערך אחזקה שמבטיח "ראש שקט", ותמיכה טכנית מבוססת מאגר ידע גדול. ואתם יכולים להתמקד במה שחשוב לכם.'
          }
        ]
      },
      whyUs: {
        title: 'אז למה לבחור בנו?',
        img: {
          src: 'assets/imgs/why-us-img.webp',
          alt: 'אז למה לבחור בנו?',
        },
        bullets: [
          {
            title: 'מומחיות מקצועית',
            text: 'אנו מתמחים בבניית עמודי נחיתה מהירים ומעוצבים, ובניהול קמפיינים ממומנים בגוגל, כדי להבטיח שאתם מקבלים את התוצאות הטובות ביותר.'
          },
          {
            title: 'תוצאות מדידות',
            text: 'אנו מתמקדים במדדים ובנתונים, כדי להבטיח שאתם מקבלים תוצאות ממשיות ומדויקות. אנו מעקבים אחרי ההצלחה של הקמפיינים שלכם ומספקים לכם דוחות מפורטים.'
          },
          {
            title: 'יתרונות טכנולוגיים',
            text: 'אנו משתמשים בטכנולוגיה המתקדמת ביותר לבניית עמודי נחיתה מאפס ניהול הקמפיינים שלכם מתבצע באופן חצי אוטומטי, כולל שימוש בהאינטיליגנציה ההיברידית - משלבת בין מומחיות אנושית, לאלגוריתמים של למידת מכונה, בכדי לשפר את דיוק ויעילות אנליטיקת השיווק.'
          }
        ]
      },
      faq: {
        title: 'יש לכם שאלה?',
        subtitle: 'שאלות ותשובות',
        qs: [
          {
            title: 'איך בונים עמוד נחיתה שיהיה יעיל?',
            answer: 'על עמוד הנחיתה לכלול עיצוב נקי ומקצועי, קריאה חזקה לפעולה, תוכן רלוונטי ואופטימיזציה למנועי חיפוש.'
          },
          {
            title: 'איך ממודדים את הצלחת הקמפיין שלי?',
            answer: 'השתמשו בכלים כמו Google Analytics למדידת תעבורה, קליקים, קצב המרה ו-ROI, ועקבו אחר המדדים באופן תדיר.'
          },
          {
            title: 'איך מקבלים תעבורה איכותית לעמוד הנחיתה שלי?',
            answer: 'שלב שיטות שיווק דיגיטלי כמו פרסום ממומן ושיווק תוכן כדי למשוך קהל מכוון.'
          },
          {
            title: 'איך מבטיחים שהעמוד הנחיתה מתאים למכשירים ניידים?',
            answer: 'השתמשו בעיצוב רספונסיבי שמתאים את עצמו לכל סוגי המכשירים ובדקו את העמוד במכשירים שונים לוודא שהוא נראה טוב.'
          },  {
            title: 'איך יכולים לייעל את ההוצאות על קמפיינים ממומנים?',
            answer: 'ניהול תקציב מדוד וממוקד, שימוש במילות מפתח רלוונטיות ובדיקות תדירות של הביצועים יכולים להביא לייעול ההוצאות.'
          },
          {
            title: 'מה זה עמוד נחיתה ולמה אנחנו צריכים את זה?',
            answer: 'עמוד נחיתה הוא ה"נקודת חיבור" בינך לבין לקוחות פוטנציאליים, וצריך אותו כדי לספק מידע ממומקד ולהגדיל את הסיכוי למכירה.'
          }
        ]
      },
      footer: {
        contact: {
          title: 'מעוניינים?',
          subtitle: 'השאירו פרטים',
          form: {
            checkboxes: {
              text: 'מה אתם מחפשים?',
              labels: [
                {
                  imgName: 'consulting',
                  text: 'ייעוץ'
                },
                {
                  imgName: 'campaign',
                  text: 'קמפיין'
                },
                {
                  imgName: 'landingpage',
                  text: 'דף נחיתה'
                }
              ],
              error: 'אנא בחרו לפחות 1'
            },
            name: {
              text: 'שם',
              lable: 'שם',
              error: 'מלאו את השם בבקשה'
            },
            email: {
              text: 'אימייל',
              lable: 'אימייל',
              error: 'מלאו את כתובת האימייל בבקשה',
              error2: 'כתובת אימייל לא תקינה',
            },
            phone: {
              text: 'טלפון',
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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  getPageConfigEnglish(): MainPageConfig {
    return {
      navbar: {
        logoImg: {
          src: 'assets/imgs/logo.svg',
          alt: 'landerX',
        },
        cta: {
          text: 'Start Now!',
          size: 'small',
          color: 'primery',
        },
        langs: this.getPageLanguages()
      },
      header: {
        img: {
          src: 'assets/imgs/header-img-en.webp',
          alt: 'WOW',
        },
        cta: {
          text: 'Start Now!',
          size: 'big',
          color: 'primery',
        },
        title: 'Every <span>startup</span> needs a good landing',
        paragraph: 'Managing high preforming campaigns and landing pages  build by a developer, along with a seamless  Google Ads integration.'
      },
      about: {
        title: 'The best value for your investment',
        subtitle: 'About Us',
        paragraph: [
          'Our mission is to make your campaigns as successful and efficient as possible. We believe in a combination of technology, AI, design and digital marketing to bring you the best results.',
          'We are a young and dynamic company that specializes in building fast and well-designed landing pages for startups, and managing funded Google campaigns.',
          'We are proud of our competitive prices, and are committed to offering you professional and personal service. With us, you are not just a customer - you are partner.'
        ]
      },
      ourServices: {
        title: 'What are We Doing?',
        subtitle: 'Our Services',
        cards: [
          {
            img: {
              src: 'assets/imgs/services-lp.webp',
              alt: 'Designing Landing Pages',
            },
            title:  'Designing Landing Pages',
            paragraph: 'Customized with a developer using the most advanced technology, and AI. increasing conversions by implement direct connection to Google Ads.'
          },
          {
            img: {
              src: 'assets/imgs/services-ad.webp',
              alt: 'Managing Google campaigns',
            },
            title: 'Managing Google Campaigns',
            paragraph: 'We manage your campaigns on Google professionally to ensure you get the best value for your investment.'
          },
          {
            img: {
              src: 'assets/imgs/services-lids.webp',
              alt: 'Lead Generation',
            },
            title: 'Lead Generation',
            paragraph: 'Our combination of advanced technology, AI, and smooth integration with Google Ads allows us to generate high-quality leads for you in an automated and efficient manner.'
          },
          {
            img: {
              src: 'assets/imgs/services-prices.webp',
              alt: 'Copy & Micro-Copy',
            },
            title: 'Copy & Micro-Copy',
            paragraph: 'No need to seek external writing or deal with inaccurate content. We create the copy and micro-copy for your landing page and campaigns'
          },
          {
            img: {
              src: 'assets/imgs/services-self.webp',
              alt: 'Programming & Speed',
            },
            title: 'Programming & Speed',
            paragraph: 'Our landing pages are optimized for fast loading with efficient code and are maintained by a senior programmer on the team, so your customers won\'t wait.'
          },
          {
            img: {
              src: 'assets/imgs/services-settings.webp',
              alt: 'Maintenance & Technical Support',
            },
            title: 'Maintenance & Technical Support',
            paragraph: 'We provide our customers with a maintenance system that ensures peace of mind, and technical support based on a large knowledge base. So you can focus on what\'s important to you.'
          }
        ]
      },
      whyUs: {
        title: 'Why choose us',
        img: {
          src: 'assets/imgs/why-us-img-en.webp',
          alt: 'Why choose us',
        },
        bullets: [
          {
            title: 'Professional expertise',
            text: 'We specialize in building fast and well-designed landing pages, and in managing funded campaigns on Google, to ensure you get the best results.'
          },
          {
            title: 'Measurable results',
            text: 'We focus on metrics and data to ensure you get tangible and accurate results. We monitor the success of your campaigns and provide you with detailed reports.'
          },
          {
            title: 'Technological advantages',
            text: 'We use the most advanced technology to build landing pages from scratch. The management of your campaigns is done Hybrid intelligence combining Advanced AI technology together with human monitoring , including the use of advanced scripts for optimal performance. '
          }
        ]
      },
      faq: {
        title: 'Do you have any question?',
        subtitle: 'FAQ',
        qs: [
          {
            title: 'How do you build an effective landing page?',
            answer: 'The landing page should include a clean and professional design, a strong call to action, relevant content, and optimization for search engines.'
          },
          {
            title: 'How do I measure the success of my campaign?',
            answer: 'Use tools like Google Analytics to measure traffic, clicks, conversion rate, and ROI, and monitor the metrics regularly.'
          },
          {
            title: 'How do I get quality traffic to my landing page?',
            answer: 'Integrate digital marketing methods such as paid advertising and content marketing to attract a targeted audience.'
          },
          {
            title: 'How do you ensure the landing page is mobile-friendly?',
            answer: 'Use responsive design that adapts to all types of devices and test the page on different devices to ensure it looks good.'
          },  {
            title: 'How can we optimize the costs of funded campaigns?',
            answer: 'Managing a measured and focused budget, using relevant keywords, and regularly checking performance can lead to cost optimization.'
          },
          {
            title: 'What is a landing page and why do we need it?',
            answer: 'A landing page is the \'connection point\' between you and potential customers, and it\'s needed to provide focused information and increase the chance of a sale.'
          }
        ]
      },
      footer: {
        contact: {
          title: 'Interested?',
          subtitle: 'Let’s Talk business',
          form: {
            checkboxes: {
              text: 'What are you looking for?',
              labels: [
                {
                  imgName: 'consulting',
                  text: 'Consulting'
                },
                {
                  imgName: 'campaign',
                  text: 'Campaign'
                },
                {
                  imgName: 'landingpage',
                  text: 'Landing Page'
                }
              ],
              error: 'Please select one'
            },
            name: {
              text: 'Name',
              lable: 'Name',
              error: 'Please fill in the name'
            },
            email: {
              text: 'Email',
              lable: 'Email',
              error: 'Please fill in the email address',
              error2: 'Email address is\'nt correct',
            },
            phone: {
              text:  'Phone number',
              lable: 'Phone number',
              error: 'Please fill in the phone number'
            },
            submit: 'Contact me!',
          },
          message: {
            title: 'Thank you for contacting',
            subtitle: 'Your message has been received successfully! We\'ll be in touch :)'
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

  getPageLanguages(): Lang[] {
    return [
      {
        img: 'assets/imgs/langs/he.webp',
        name: 'he',
        title: 'עברית',
        selected: false
      },
      {
        img: 'assets/imgs/langs/us.webp',
        name: 'en',
        title: 'English',
        selected: false
      }
    ]
  }
}

export interface MainPageConfig {
  navbar: NavbarConfig,
  header: HeaderConfig,
  about: AboutConfig,
  ourServices: OurServicesConfig,
  whyUs: WhyUsConfig,
  faq: FaqConfig,
  footer: FooterConfig
}
