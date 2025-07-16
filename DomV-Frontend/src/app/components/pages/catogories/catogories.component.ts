import { Component, OnInit } from '@angular/core';
import { ResourcesService } from 'src/app/services/resources.service';
import{ Category } from '../../../model/catogory/catogory.module';
import { StealthModeService } from '../../../services/stealth-mode.service';



@Component({
  selector: 'app-catogories',
  templateUrl: './catogories.component.html',
  styleUrls: ['./catogories.component.css']
})
export class CatogoriesComponent implements OnInit {
  isStealthMode = false;

  categories: Category[] = [];

  constructor(private service: ResourcesService) {}

  ngOnInit() {
    this.service.getCategories().subscribe(data => this.categories = data);
  }
}
