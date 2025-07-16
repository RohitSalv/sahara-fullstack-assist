import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Resource } from 'src/app/model/resource/resource.module';
import { ResourcesService } from 'src/app/services/resources.service';

@Component({
  selector: 'app-resource',
  templateUrl: './resource.component.html',
  styleUrls: ['./resource.component.css']
})
export class ResourceComponent implements OnInit {
  resources:Resource[] = [];
  subcategoryId: number = 0;

   constructor(
    private resourceService: ResourcesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
 const subcategoryId = this.route.snapshot.paramMap.get('id');
  console.log("Subcategory ID:", subcategoryId);  // confirm value
  if (subcategoryId) {
    this.resourceService.getResources(Number(subcategoryId))
      .subscribe(data => {
        console.log("Resources fetched:", data);
        this.resources = data;
      });
  } else {
    console.error("No subcategory ID in route params!");
  }
  }
}
