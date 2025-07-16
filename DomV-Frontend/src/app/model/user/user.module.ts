import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

export class User {
  mob!: string;
  name!: string;
  age!: number;
  gender!: 'MALE' | 'FEMALE' | 'OTHER';
  trust1!: string;
  trust2!: string;
  password!: string;
  role!: 'ADMIN' | 'USER';
  maritalStatus!: 'SINGLE' | 'MARRIED' | 'DIVORCED' | 'WIDOWED';
}


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class UserModule { }
