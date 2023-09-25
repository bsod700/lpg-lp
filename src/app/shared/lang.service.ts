import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LangService {
  private lang$: BehaviorSubject<any> = new BehaviorSubject <string>('he'); 

  getLang(): Observable<string> {
    return this.lang$.asObservable()
  }
  getCurrentLang(): string {
    return this.lang$.getValue();
  }
  setLang(lang: string): void {
    this.lang$.next(lang)
  }
}
