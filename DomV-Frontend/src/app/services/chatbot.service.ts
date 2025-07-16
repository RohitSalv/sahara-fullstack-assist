import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatbotService {

   private apiUrl = 'http://localhost:5000/chatbot/ask';

  constructor(private http: HttpClient) { }

  sendMessage(prompt: string): Observable<any> {
    const payload = { prompt };
    return this.http.post(this.apiUrl, payload);
}
}