import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../model/catogory/catogory.module';
import{ subcategory } from '../model/subcatogory/subcatogory.module';
import { Resource } from '../model/resource/resource.module';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResourcesService {

  private baseUrl = 'http://localhost:8092/resource';

  constructor(private http:HttpClient) { }


  getSubcategories(categoryId: number) {
    return this.http.get<subcategory[]>(`${this.baseUrl}/categories/${categoryId}/subcategories`);
  }

    getResources(subcategoryId: number): Observable<Resource[]> {
    return this.http.get<Resource[]>(`${this.baseUrl}/subcategories/${subcategoryId}/resources`);
  }
    // Get a category by ID
    getCategoryById(id: number): Observable<Category> {
      return this.http.get<Category>(`${this.baseUrl}/categories/${id}`);
    }
  
    // Create new category
    addCategory(category: Category): Observable<Category> {
      return this.http.post<Category>(`${this.baseUrl}/categories`, category);
    }
  
    // Update category
    updateCategory(id: number, category: Category): Observable<Category> {
      return this.http.put<Category>(`${this.baseUrl}/categories/${id}`, category);
    }
  
    // Delete category
    deleteCategory(id: number): Observable<void> {
      return this.http.delete<void>(`${this.baseUrl}/categories/${id}`);
    }

    // 📌 Get all categories (for dropdowns etc)
  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.baseUrl}/categories`);
  }

  // 📌 Get all subcategories
  getAllSubcategories(): Observable<subcategory[]> {
    return this.http.get<subcategory[]>(`${this.baseUrl}/all-subcategories`);
  }

  // 📌 Add subcategory
  addSubcategory(subcategory: subcategory): Observable<any> {
    return this.http.post(`${this.baseUrl}/subcategories`, subcategory, { responseType: 'text' });
  }

  // 📌 Update subcategory
  updateSubcategory(subcategory: subcategory): Observable<any> {
    return this.http.put(`${this.baseUrl}/subcategories/${subcategory.id}`, subcategory, { responseType: 'text' });
  }

  // 📌 Delete subcategory
  deleteSubcategory(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/subcategories/${id}`, { responseType: 'text' });
  }

 

  addResource(resource: Resource): Observable<any> {
    return this.http.post(this.baseUrl, resource);
  }

  updateResource(resource: Resource): Observable<any> {
    return this.http.put(`${this.baseUrl}/${resource.id}`, resource);
  }

  deleteResource(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  
}
