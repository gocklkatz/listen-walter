import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  imports: [ReactiveFormsModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css',
})
export class LoginFormComponent {
  @Output() onSubmitLoginEvent = new EventEmitter();

  //login: string = "";
  //password: string = "";

  userForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      login: [],
      password: [],
    });
  }

  onSubmitLogin(): void {
    // console.log(this.userForm.value.login);
    // console.log(this.userForm.value.password);
    this.onSubmitLoginEvent.emit({
      login: this.userForm.value.login,
      password: this.userForm.value.password,
    });
  }
}
