import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportGroupsComponent } from './support-groups.component';

describe('SupportGroupsComponent', () => {
  let component: SupportGroupsComponent;
  let fixture: ComponentFixture<SupportGroupsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SupportGroupsComponent]
    });
    fixture = TestBed.createComponent(SupportGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
