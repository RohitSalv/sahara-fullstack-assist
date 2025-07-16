import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface SupportGroup {
  id: number;
  name: string;
  schedule: string;
  location: string;
  onlineOption: string;
  description: string;
}


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class SupportGroupModule { }
