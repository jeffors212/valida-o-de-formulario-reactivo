import { Component, OnInit,  } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'contactForm',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  createFormGroup (){
    return new FormGroup ({
      email: new FormControl('', [Validators.required, Validators.minLength(5), Validators.pattern(this.emailPattern)]),
      name: new FormControl ('', [Validators.required, Validators.minLength(5)]),
      message: new FormControl ('', [Validators.required, Validators.minLength(10), Validators.maxLength(100)]),


    });

  }

  contactForm: FormGroup;


  constructor() {
    this.contactForm = this. createFormGroup();
   }

  ngOnInit(): void {
  }

  onResetForm(){
    this.contactForm.reset();
  }

  onSaveForm (){
    console.log('Saved', this.contactForm.value);
    if (this.contactForm.valid){

      this.onResetForm();
      console.log ('valid');
    }else{
      console.log ('not valid');
    }

  }



  get name() { return this.contactForm.get('name'); }
    get email () { return this.contactForm.get('email'); }
    get message () { return this.contactForm.get('message');


    }
  }
