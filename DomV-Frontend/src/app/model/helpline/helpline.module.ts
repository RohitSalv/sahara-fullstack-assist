import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Helpline {
  id: number;
  name: string;
  phoneNumber: string;
  hours: string;
  description: string;
}


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class HelplineModule { }
