import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { subcategory } from 'src/app/model/subcatogory/subcatogory.module';
import { SubcategoryService } from 'src/app/services/subcategory.service';

@Component({
  selector: 'app-managesubcategories',
  templateUrl: './managesubcategories.component.html',
  styleUrls: ['./managesubcategories.component.css']
})
export class ManagesubcategoriesComponent {
  subcategories: subcategory[] = [];
  subcategoryForm: FormGroup;
  editingId: number | null = null;

  constructor(private fb: FormBuilder, private subcategoryService: SubcategoryService) {
    this.subcategoryForm = this.fb.group({
      name: ['', Validators.required],
      description: [''],
      categoryId: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.loadSubcategories();
  }

  loadSubcategories(): void {
    this.subcategoryService.getSubcategories().subscribe(data => {
      this.subcategories = data;
    });
  }

  onSubmit(): void {
    const formValue = this.subcategoryForm.value;
    if (this.editingId) {
      // Update
      const updateData = {
        id: this.editingId,
        name: formValue.name,
        description: formValue.description,
        categoryId: +formValue.categoryId
      };
      this.subcategoryService.updateSubcategory(updateData).subscribe(() => {
        this.loadSubcategories();
        this.subcategoryForm.reset();
        this.editingId = null;
      });
    } else {
      // Add
      const newData = {
        name: formValue.name,
        description: formValue.description,
        categoryId: +formValue.categoryId
      };
      this.subcategoryService.addSubcategory(newData).subscribe(() => {
        this.loadSubcategories();
        this.subcategoryForm.reset();
      });
    }
  }

  editSubcategory(subcategory: subcategory): void {
    this.subcategoryForm.patchValue({
      name: subcategory.name,
      description: subcategory.description,
      categoryId: subcategory.category?.id
    });
    this.editingId = subcategory.id!;
  }

  deleteSubcategory(id: number): void {
    if (confirm('Are you sure you want to delete this subcategory?')) {
      this.subcategoryService.deleteSubcategory(id).subscribe(() => {
        this.loadSubcategories();
      });
    }
  }

  cancelEdit(): void {
    this.subcategoryForm.reset();
    this.editingId = null;
  }
}
