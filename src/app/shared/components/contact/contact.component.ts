import { ChangeDetectionStrategy, Component, Input, inject, OnChanges, OnInit, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbstractControl, FormArray, ReactiveFormsModule } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { ContactForm } from '../../interfaces/contact-form.interface';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { CheckboxItem } from '../../interfaces/checkbox-item.interface';
import { Img, isDeepEqual } from '@bsod700/lib';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatButtonModule, MatInputModule, MatFormFieldModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactComponent implements OnChanges, OnInit {
  @Output() sentMessage = new EventEmitter<boolean>(false)
  @Input() componentConfig!: ContactConfig;
  
  private formBuilder: FormBuilder = inject(FormBuilder)

  message: boolean = false;
  contactForm!: FormGroup;
  clickOnSubmitted: boolean = false
  checkboxesTouched: boolean = false;
  checkboxes: CheckboxItem[] = [];
  checkboxesValue!: string;
  checkboxesIsToucheded: boolean = false;

  ngOnInit() {
    this.contactForm = this.formBuilder.group({
      checkboxes: this.formBuilder.array([]),
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [Validators.required]),
    });
  }
  get checkboxControls() {
    return (this.contactForm.get('checkboxes') as FormArray).controls;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['componentConfig']) {
      if(!isDeepEqual(changes['componentConfig'].previousValue, changes['componentConfig'].currentValue)) {
        this.checkboxesInit()
      } 
    }
  }

  checkboxesInit(): void {
    this.checkboxes = [];
    this.componentConfig.form.checkboxes.labels.forEach(element => {
      
      this.checkboxes.push({
        label: element.text,
        icon: {
          active: {
            src: `assets/imgs/form/${element.imgName}_white.svg`,
            alt: element.text
          },
          inactive: {
            src: `assets/imgs/form/${element.imgName}_dark.svg`,
            alt: element.text
          }
         
        },
        control: new FormControl(false)
      })
    });
  }

  onCheckboxChange(e: Event) {
    const input = e.target as HTMLInputElement;
    this.checkboxesTouched = true;
  
    const want: FormArray = this.contactForm.get('checkboxes') as FormArray;
    if (input.checked) {
      want.push(new FormControl(input.value));
    } else {
      let i = 0;
      want.controls.forEach((control: AbstractControl) => {
        // Ensure the control is a FormControl before accessing its value
        if (control instanceof FormControl && control.value == input.value) {
          want.removeAt(i);
          return;
        }
        i++;
      });
    }
    this.checkboxesIsToucheded = this.checkboxesIsTouched();
    this.checkboxesValue = want.value.join(', ');
  }
  
  
  checkboxesIsTouched(): boolean {
    const checkboxesTouchedAndEmpty = this.contactForm.get('checkboxes')?.value.length == 0 && this.checkboxesTouched
    const clickOnSubmitted = this.clickOnSubmitted && this.contactForm.get('checkboxes')?.value.length == 0
    return checkboxesTouchedAndEmpty || clickOnSubmitted
  }
  
  public sendEmail(e: Event) {
    console.log(this.contactForm.get('checkboxes')?.value);
    
    e.preventDefault();
    if(this.contactForm.valid) {
      console.log(this.contactForm.value);
      emailjs.sendForm(environment.emailjs.SERVICE_ID, environment.emailjs.TEMPLATE_ID, e.target as HTMLFormElement,  environment.emailjs.PUBLIC_KEY)
      .then((result: EmailJSResponseStatus) => {
        this.message = true;
        this.sentMessage.emit(true)
        this.contactForm.reset()
        console.log(result);
      }, (error) => {
        console.log(error.text);
      });
    }
    else {
      this.clickOnSubmitted = true
    }
  }
}

export interface ContactConfig {
  title: string,
  subtitle: string,
  form: ContactForm,
  message: {
    title: string,
    subtitle: string
  },
  logo: Img
}
