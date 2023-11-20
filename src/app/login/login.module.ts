import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    CardModule,
    ButtonModule,
    DividerModule,
    ReactiveFormsModule,
    InputTextModule,
    PasswordModule,
  ],
  exports: [LoginComponent],
})
export class LoginModule {}
