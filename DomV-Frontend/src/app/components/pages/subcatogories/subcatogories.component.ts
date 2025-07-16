import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ResourcesService } from 'src/app/services/resources.service';
import{ subcategory } from '../../../model/subcatogory/subcatogory.module';

@Component({
  selector: 'app-subcatogories',
  templateUrl: './subcatogories.component.html',
  styleUrls: ['./subcatogories.component.css']
})
export class SubcatogoriesComponent {
  subcatogories: subcategory[] = [];
  categoryId:number = 0;

  constructor(private service:ResourcesService,private route:ActivatedRoute){}

  ngOnInit() {
    const categoryId = this.route.snapshot.paramMap.get('id');
    console.log("Category ID:", categoryId);
    this.service.getSubcategories(Number(categoryId)).subscribe(data => {
      console.log("Subcategories:", data);
      this.subcatogories = data;
    });
  }
}
