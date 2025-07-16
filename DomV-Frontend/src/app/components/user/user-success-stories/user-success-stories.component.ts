import { Component } from '@angular/core';
import { SuccessStory } from 'src/app/model/success-story/success-story.module';
import { SupportRecoveryService } from 'src/app/services/support-recovery.service';

@Component({
  selector: 'app-user-success-stories',
  templateUrl: './user-success-stories.component.html',
  styleUrls: ['./user-success-stories.component.css']
})
export class UserSuccessStoriesComponent {
stories: SuccessStory[] = [];
  searchText: string = '';
  currentPage: number = 1;
  pageSize: number = 6;

  constructor(private service: SupportRecoveryService) {}

  ngOnInit(): void {
    this.loadApprovedStories();
  }

  loadApprovedStories() {
    this.service.getApprovedStories().subscribe(data => {
      this.stories = data;
    });
  }

  filteredStories(): SuccessStory[] {
    const start = (this.currentPage - 1) * this.pageSize;
    const end = start + this.pageSize;

    return this.stories
      .filter(story =>
        story.title.toLowerCase().includes(this.searchText.toLowerCase()) ||
        story.authorName.toLowerCase().includes(this.searchText.toLowerCase())
      )
      .slice(start, end);
  }

  totalPages(): number {
    return Math.ceil(
      this.stories.filter(story =>
        story.title.toLowerCase().includes(this.searchText.toLowerCase()) ||
        story.authorName.toLowerCase().includes(this.searchText.toLowerCase())
      ).length / this.pageSize
    );
  }

  nextPage() {
    if (this.currentPage < this.totalPages()) {
      this.currentPage++;
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }
}
