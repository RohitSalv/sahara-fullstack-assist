import { Injectable } from '@angular/core';
import { Helpline } from '../model/helpline/helpline.module';
import { SupportGroup } from '../model/support-group/support-group.module';
import { RecoveryTool } from '../model/recovery-tool/recovery-tool.module';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SuccessStory } from '../model/success-story/success-story.module';

@Injectable({
  providedIn: 'root'
})
export class SupportRecoveryService {
  private baseUrl='http://localhost:8092/support-recovery';

  constructor(private http:HttpClient) { }

  deleteHelpline(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }


  getHelplines() {
  return this.http.get<Helpline[]>(`${this.baseUrl}/helplines`);
}

getSupportGroups() {
  return this.http.get<SupportGroup[]>(`${this.baseUrl}/support-groups`);
}

getRecoveryTools() {
  return this.http.get<RecoveryTool[]>(`${this.baseUrl}/recovery-tools`);
}
getAllStories(): Observable<SuccessStory[]> {
  return this.http.get<SuccessStory[]>(`${this.baseUrl}/success-stories`);
}

approveStory(id: number): Observable<any> {
  return this.http.put(`${this.baseUrl}/success-stories/approve/${id}`, {});
}

deleteStory(id: number): Observable<any> {
  return this.http.delete(`${this.baseUrl}/success-stories/${id}`);
}

getApprovedStories(): Observable<SuccessStory[]> {
  return this.http.get<SuccessStory[]>(`${this.baseUrl}/success-stories/approved`);
}
addStory(story: any): Observable<any> {
  return this.http.post('http://localhost:8092/support-recovery/success-stories', story);
}


}
