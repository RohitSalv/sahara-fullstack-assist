import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user/user.module';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.css']
})
export class ManageUsersComponent implements OnInit {
 users: User[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 10;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers(): void {
    this.userService.getAllUsers().subscribe(
      data => {
        this.users = data;
      },
      error => {
        alert("Failed to load users.");
        console.error(error);
      }
    );
  }

  deleteUser(mob: string): void {
    if (confirm('Are you sure you want to delete this user?')) {
      this.userService.deleteUser(mob).subscribe(
        res => {
          alert(res);
          this.getAllUsers(); // reload list after delete
        },
        error => {
          alert('Error deleting user. Possible constraint issue.');
          console.error(error);
        }
      );
    }
  }

  // Pagination helpers
  get paginatedUsers(): User[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.users.slice(startIndex, startIndex + this.itemsPerPage);
  }

  get totalPages(): number[] {
    return Array(Math.ceil(this.users.length / this.itemsPerPage))
      .fill(0)
      .map((x, i) => i + 1);
  }

  changePage(page: number): void {
    this.currentPage = page;
  }
}
