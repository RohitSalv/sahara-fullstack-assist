import { Component, OnInit } from '@angular/core';
import { Helpline } from 'src/app/model/helpline/helpline.module';
import { SupportRecoveryService } from 'src/app/services/support-recovery.service';

@Component({
  selector: 'app-helplines',
  templateUrl: './helplines.component.html',
  styleUrls: ['./helplines.component.css']
})
export class HelplinesComponent implements OnInit {
  helplines: Helpline[] = [];
  searchTerm: string = '';
  availabilityFilter: string = 'all';
  isSorted: boolean = false;

  // Pagination variables
  currentPage: number = 1;
  itemsPerPage: number = 10;

  constructor(private service: SupportRecoveryService) {}

  ngOnInit() {
    this.service.getHelplines().subscribe(data => this.helplines = data);
  }

  filteredHelplines(): Helpline[] {
    let filtered = this.helplines.filter(h =>
      h.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );

    if (this.availabilityFilter !== 'all') {
      filtered = filtered.filter(h =>
        h.hours.toLowerCase().includes(this.availabilityFilter)
      );
    }

    if (this.isSorted) {
      filtered.sort((a, b) => a.name.localeCompare(b.name));
    }

    return filtered;
  }

  // Pagination logic
  paginatedHelplines(): Helpline[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.filteredHelplines().slice(startIndex, startIndex + this.itemsPerPage);
  }

  totalPages(): number {
    return Math.ceil(this.filteredHelplines().length / this.itemsPerPage);
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

  toggleSort() {
    this.isSorted = !this.isSorted;
  }

  copyPhone(phone: string) {
    navigator.clipboard.writeText(phone);
    alert(`Phone number ${phone} copied to clipboard!`);
  }
}
