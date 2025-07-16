import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


export interface Category {
  id: number;
  name: string;
  description : string;
  // add other properties as needed
}
@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class CatogoryModule {

  
 }
