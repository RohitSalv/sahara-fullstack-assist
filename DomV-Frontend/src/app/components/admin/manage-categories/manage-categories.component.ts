import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Category } from 'src/app/model/catogory/catogory.module';
import { CategoryService } from 'src/app/services/category.service';
import { ResourcesService } from 'src/app/services/resources.service';

@Component({
  selector: 'app-manage-categories',
  templateUrl: './manage-categories.component.html',
  styleUrls: ['./manage-categories.component.css']
})
export class ManageCategoriesComponent implements OnInit{
  categories: Category[] = [];
  categoryForm: FormGroup;
  isEditing = false;
  editId: number | null = null;

  constructor(private service: ResourcesService, private fb: FormBuilder) {
    this.categoryForm = this.fb.group({
      name: ['', Validators.required],
      description: ['']
    });
  }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    this.service.getCategories().subscribe(data => {
      this.categories = data;
    });
  }

  addCategory() {
    if (this.categoryForm.invalid) return;

    if (this.isEditing && this.editId !== null) {
      // Update existing
      this.service.updateCategory(this.editId, this.categoryForm.value).subscribe(() => {
        this.resetForm();
        this.getCategories();
      });
    } else {
      // Add new
      this.service.addCategory(this.categoryForm.value).subscribe(() => {
        this.resetForm();
        this.getCategories();
      });
    }
  }

  editCategory(category: Category) {
    this.categoryForm.patchValue({
      name: category.name,
      description: category.description
    });
    this.isEditing = true;
    this.editId = category.id!;
  }

  deleteCategory(id: number) {
  if (confirm("Are you sure you want to delete this category? This will delete all linked subcategories if allowed.")) {
    this.service.deleteCategory(id).subscribe({
      next: () => {
        alert("Category deleted successfully!");
        this.getCategories();  // reload the list after delete
      },
      error: (err) => {
        if (err.status === 500) {
          alert("❌ Cannot delete category because it has subcategories linked. Please delete them first.");
        } else {
          alert("❌ Something went wrong while deleting.");
        }
      }
    });
  }
}


  resetForm() {
    this.categoryForm.reset();
    this.isEditing = false;
    this.editId = null;
  }
}
