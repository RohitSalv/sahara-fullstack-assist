import { Component, OnInit } from '@angular/core';
import { SupportGroup } from 'src/app/model/support-group/support-group.module';
import { SupportRecoveryService } from 'src/app/services/support-recovery.service';

@Component({
  selector: 'app-support-groups',
  templateUrl: './support-groups.component.html',
  styleUrls: ['./support-groups.component.css']
})
export class SupportGroupsComponent implements OnInit {
  groups: SupportGroup[] = [];

  constructor(private service: SupportRecoveryService) {}

  ngOnInit() {
    this.service.getSupportGroups().subscribe(data => this.groups = data);
  }
}