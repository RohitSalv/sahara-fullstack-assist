import { Component } from '@angular/core';
import { SuccessStory } from 'src/app/model/success-story/success-story.module';
import { SupportRecoveryService } from 'src/app/services/support-recovery.service';

@Component({
  selector: 'app-manage-success-stories-component',
  templateUrl: './manage-success-stories-component.component.html',
  styleUrls: ['./manage-success-stories-component.component.css']
})
export class ManageSuccessStoriesComponentComponent {
  stories: SuccessStory[] = [];
  searchText: string = '';
  currentPage: number = 1;
  pageSize: number = 6;

  constructor(private service: SupportRecoveryService) {}

  ngOnInit(): void {
    this.loadStories();
  }

  loadStories() {
    this.service.getAllStories().subscribe(data => {
      this.stories = data;
    });
  }

  approveStory(id: number) {
    this.service.approveStory(id).subscribe(() => {
      this.loadStories();
    });
  }

  deleteStory(id: number) {
    if (confirm('Are you sure you want to delete this story?')) {
      this.service.deleteStory(id).subscribe(() => {
        this.loadStories();
      });
    }
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
