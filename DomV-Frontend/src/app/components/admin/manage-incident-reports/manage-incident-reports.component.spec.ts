import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageIncidentReportsComponent } from './manage-incident-reports.component';

describe('ManageIncidentReportsComponent', () => {
  let component: ManageIncidentReportsComponent;
  let fixture: ComponentFixture<ManageIncidentReportsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManageIncidentReportsComponent]
    });
    fixture = TestBed.createComponent(ManageIncidentReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
