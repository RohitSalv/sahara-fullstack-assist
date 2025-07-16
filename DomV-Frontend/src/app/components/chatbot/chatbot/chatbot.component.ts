import { Component } from '@angular/core';
import { ChatbotService } from 'src/app/services/chatbot.service';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent {

  prompt: string = '';
  messages: { from: string, text: string }[] = [];
  isLoading: boolean = false;

  constructor(private chatbotService: ChatbotService) { }

  sendMessage() {
    if (!this.prompt.trim()) return;

    // Push user message
    this.messages.push({ from: 'User', text: this.prompt });

    this.isLoading = true;

    this.chatbotService.sendMessage(this.prompt).subscribe(
      res => {
        const parts: string[] = res.response.split(/(📖|🤖)/).filter((p: string) => p.trim() !== '');
        parts.forEach((p: string) => {
          this.messages.push({ from: 'Bot', text: p.trim() });
        });
        this.isLoading = false;
      },
      err => {
        this.messages.push({ from: 'Bot', text: '❌ Sorry, something went wrong.' });
        this.isLoading = false;
      }
    );

    this.prompt = '';
  }

  formatMessage(message: string): string {
    message = message.replace(/\b(\d{3,5})\b/g, '<span class="helpline">$1</span>');
    message = message.replace(/\d+\.\s/g, '• ');

    if (message.startsWith('📖')) {
      return `<span class="legal-advice">${message}</span>`;
    } else if (message.startsWith('🤖 AI Advice')) {
      return `<span class="ai-advice">${message}</span>`;
    } else if (message.startsWith('🤖 AI Response')) {
      return `<span class="ai-only">${message}</span>`;
    }

    return message.replace(/\n/g, '<br>');
  }
}
