import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
export interface SuccessStory {
  id: number;
  title: string;
  content: string;
  authorName: string;
  datePosted: string;
  approved: boolean;
  link?: string;
}



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class SuccessStoryModule { }
