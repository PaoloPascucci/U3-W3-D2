import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-td-form',
  templateUrl: './td-form.component.html',
  styleUrls: ['./td-form.component.scss'],
})
export class TdFormComponent implements OnInit {
  // userForm = {
  //   defUserName: '',
  //   email: '',
  //   question: '',
  // };
  userForm = {
      defUserName: '',    
      password: ''
    };
  // generi = [
  //   {
  //     label: 'uomo',
  //     value: 'uomo',
  //   },
  //   {
  //     label: 'donna',
  //     value: 'donna',
  //   },
  // ];

  // risposta = '';

  user: any = {
    username: '',
    password: '',
  };

  constructor() {}

  @ViewChild('form', { static: true }) form!: NgForm;

  ngOnInit(): void {
    this.form.statusChanges?.subscribe((status) => {
      console.log('Stato del form:', status);
    });
  }

  // generaUser() {
  //   this.form.form.patchValue({
  //     userInfo: {
  //       email: 'pippo@pippo.com',
  //       username: 'pippo',
  //     },
  //   });
  // }
  submit() {
    console.log('Form inviato', this.form);
    this.user.username = this.form.value.userInfo.username;
    this.user.password = this.form.value.userInfo.password;
  }
}
