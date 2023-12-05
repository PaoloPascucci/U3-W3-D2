import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
  FormArray,
} from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss'],
})
export class ReactiveFormComponent implements OnInit {
  form!: FormGroup;
  generi = ['uomo', 'donna'];
  userProibiti = ['pippo', 'pluto'];
  pRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/;
  constructor(private fb: FormBuilder) {}

  validUserName = (formC: FormControl) => {
    if (this.userProibiti.includes(formC.value)) {
      return { 'usernameProibito': true };
    } else {
      return null;
    }
  }; 
  regex = (formC: FormControl) => {
    if (!this.pRegex.test(formC.value)) { 
      return {'pRegex': true}     
    } else {
      return null;
    }
  }; 


  ngOnInit(): void {
    this.form = this.fb.group({
      userInfo: this.fb.group({
        userFName: this.fb.control(null, [Validators.required, this.validUserName]),
        userLName: this.fb.control(null, [Validators.required, this.validUserName]),
        password: this.fb.control(null, [Validators.required, this.regex]),
        confermaPassword: this.fb.control(null, [Validators.required, this.regex]),
        genere:this.fb.control(''),
        immagineP:this.fb.control(''),
        biografia:this.fb.control(''),
        nickname:this.fb.control('')
      }),

    });
  }
  getErrorsC(name:string, error:string) {
    return this.form.get(name)?.errors![error]
  }

  getFormC(name:string) {
    return this.form.get(name)
  }
  // getSportsC() {
  //   return (this.form.get('sports') as FormArray).controls;
  // }

  // addSports() {
  //   const control = this.fb.control(null);
  //   (this.form.get('sports') as FormArray).push(control)
  //   console.log(this.getSportsC());
  // }

  submit() {
    console.log(this.form);
    console.log('Form Correttamnete inviato');
    this.form.reset();
  }
}
