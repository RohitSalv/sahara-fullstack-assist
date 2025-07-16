import { Component, OnInit } from '@angular/core';
import { RecoveryTool } from 'src/app/model/recovery-tool/recovery-tool.module';

import { SupportRecoveryService } from 'src/app/services/support-recovery.service';

@Component({
  selector: 'app-recovery-tools',
  templateUrl: './recovery-tools.component.html',
  styleUrls: ['./recovery-tools.component.css']
})
export class RecoveryToolsComponent implements OnInit {
  tools: RecoveryTool[] = [];

  constructor(private service: SupportRecoveryService) {}

  ngOnInit() {
    this.service.getRecoveryTools().subscribe(data => this.tools = data);
  }
}
