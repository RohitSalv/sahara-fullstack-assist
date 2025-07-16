import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface subcategory {
  id?: number;
  name: string;
  description: string;
  category: {
    id: number;
    name: string;
    description: string;
  } | null;
}



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class SubcatogoryModule { }
