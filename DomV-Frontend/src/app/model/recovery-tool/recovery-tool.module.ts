import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface RecoveryTool {
  id: number;
  title: string;
  description: string;
  iconUrl: string;
  buttonText: string;
  link: string;
}


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class RecoveryToolModule { }
