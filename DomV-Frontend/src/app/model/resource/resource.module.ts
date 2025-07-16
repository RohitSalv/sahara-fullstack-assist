import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Resource {
  id?: number;
  title: string;
  description: string;
  contactNumber: string;
  address: string;
  websiteUrl: string;
  imageUrl: string;
  documentUrl: string;
  videoUrl: string;
  subcategory: {
    id: number;
  };
}




@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ResourceModule { }
