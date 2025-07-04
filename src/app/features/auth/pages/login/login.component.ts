import { Component } from '@angular/core';
import { LoginFormComponent } from '../../components/login-form/login-form.component';
import { PanelComponent } from '../../components/panel/panel.component';

@Component({
  selector: 'app-login',
  imports: [LoginFormComponent, PanelComponent],
  templateUrl: './login.component.html',
})
export default class LoginComponent { }
