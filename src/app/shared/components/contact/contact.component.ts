import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatTooltipModule} from '@angular/material/tooltip';
import { environment } from 'src/environments/environment';
import { ContactForm } from '../../interfaces/contact-form.interface';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Img } from '../../interfaces/img.interface';
import {MatButtonModule} from '@angular/material/button';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatButtonModule, FormsModule, MatInputModule, MatFormFieldModule, MatSelectModule, MatTooltipModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  @Input() componentConfig!: {
    title: string,
    subtitle: string,
    form: ContactForm,
    message: {
      title: string,
      subtitle: string
    },
    logo: Img
  };
  message: boolean = false
  contactForm!: FormGroup;
  formBuilder: FormBuilder = inject(FormBuilder)
  clickOnSubmited: boolean = false
  ngOnInit() {
    this.contactForm = this.formBuilder.group({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [Validators.required]),
    });
  }
  public sendEmail(e: Event) {
    
    e.preventDefault();
    if(this.contactForm.valid) {
      console.log(this.contactForm.value);
      emailjs.sendForm(environment.emailjs.SERVICE_ID, environment.emailjs.TEMPLATE_ID, e.target as HTMLFormElement,  environment.emailjs.PUBLIC_KEY)
      .then((result: EmailJSResponseStatus) => {
        this.message = true;
        this.contactForm.reset()
        console.log(result);
      }, (error) => {
        console.log(error.text);
      });
    }
    else {
      this.clickOnSubmited = true
    }
    
  }
}
