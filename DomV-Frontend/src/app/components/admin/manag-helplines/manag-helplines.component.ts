import { Component, OnInit } from '@angular/core';
import { Helpline } from 'src/app/model/helpline/helpline.module';
import { SupportRecoveryService } from 'src/app/services/support-recovery.service';

@Component({
  selector: 'app-manag-helplines',
  templateUrl: './manag-helplines.component.html',
  styleUrls: ['./manag-helplines.component.css']
})
export class ManagHelplinesComponent implements OnInit {

  helplines: Helpline[] = [];
  paginatedHelplines: Helpline[] = [];
  itemsPerPage = 5;
  currentPage = 1;
  totalPages: number[] = [];

  constructor(private service: SupportRecoveryService) {}

  ngOnInit(): void {
    this.fetchHelplines();
  }

  fetchHelplines(): void {
    this.service.getHelplines().subscribe(data => {
      this.helplines = data;
      this.updatePagination();
    });
  }

  deleteHelpline(id: number): void {
    if (confirm('Are you sure you want to delete this helpline?')) {
      this.service.deleteHelpline(id).subscribe(() => {
        this.fetchHelplines();
      });
    }
  }

  updatePagination(): void {
    const total = Math.ceil(this.helplines.length / this.itemsPerPage);
    this.totalPages = Array.from({ length: total }, (_, i) => i + 1);
    this.paginate();
  }

  paginate(): void {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    this.paginatedHelplines = this.helplines.slice(start, end);
  }

  changePage(page: number): void {
    this.currentPage = page;
    this.paginate();
  }
}
