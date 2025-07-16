import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Resource } from 'src/app/model/resource/resource.module';
import { ResourcesService } from 'src/app/services/resources.service';

@Component({
  selector: 'app-manageresource',
  templateUrl: './manageresource.component.html',
  styleUrls: ['./manageresource.component.css']
})
export class ManageresourceComponent implements OnInit{

  resources: Resource[] = [];
  resourceForm: FormGroup;
  isEditMode: boolean = false;

  constructor(private service: ResourcesService, private fb: FormBuilder) {
    this.resourceForm = this.fb.group({
      id: [null],
      title: ['', Validators.required],
      description: ['', Validators.required],
      contactNumber: [''],
      address: [''],
      websiteUrl: [''],
      imageUrl: [''],
      documentUrl: [''],
      videoUrl: [''],
      subcategoryId: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.fetchResources();
  }

  fetchResources() {
    const subcategoryId = this.resourceForm.value.subcategoryId || 0; // Provide a valid subcategoryId here
    this.service.getResources(subcategoryId).subscribe(data => {
      this.resources = data;
      console.log(data); // See what comes from API

    });
  }

  onSubmit() {
    const resource: Resource = {
      ...this.resourceForm.value,
      subcategory: { id: this.resourceForm.value.subcategoryId }
    };

    if (this.isEditMode) {
      this.service.updateResource(resource).subscribe(() => {
        this.fetchResources();
        this.resourceForm.reset();
        this.isEditMode = false;
      });
    } else {
      this.service.addResource(resource).subscribe(() => {
        this.fetchResources();
        this.resourceForm.reset();
      });
    }
  }

  editResource(r: Resource) {
    this.isEditMode = true;
    this.resourceForm.patchValue({
      id: r.id,
      title: r.title,
      description: r.description,
      contactNumber: r.contactNumber,
      address: r.address,
      websiteUrl: r.websiteUrl,
      imageUrl: r.imageUrl,
      documentUrl: r.documentUrl,
      videoUrl: r.videoUrl,
      subcategoryId: r.subcategory.id
    });
  }

  deleteResource(id: number | undefined) {
    if (id && confirm("Are you sure you want to delete this resource?")) {
      this.service.deleteResource(id).subscribe(() => {
        this.fetchResources();
      });
    }
  }
  

}
