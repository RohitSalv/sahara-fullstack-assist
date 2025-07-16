import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { subcategory } from '../model/subcatogory/subcatogory.module';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubcategoryService {
  private baseUrl = 'http://localhost:8092/resource';

  constructor(private http: HttpClient) {}


  getSubcategories(): Observable<subcategory[]> {
    return this.http.get<subcategory[]>(`${this.baseUrl}/all-subcategories`);
  }

  addSubcategory(subcategory: { name: string; description: string; categoryId: number }): Observable<any> {
    return this.http.post(`${this.baseUrl}/subcategories`, subcategory);
  }

  updateSubcategory(subcategory: { id: number; name: string; description: string; categoryId: number }): Observable<any> {
    return this.http.put(`${this.baseUrl}/subcategories/${subcategory.id}`, subcategory);
  }

  deleteSubcategory(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/subcategories/${id}`);
  }
}
