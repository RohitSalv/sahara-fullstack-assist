import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagHelplinesComponent } from './manag-helplines.component';

describe('ManagHelplinesComponent', () => {
  let component: ManagHelplinesComponent;
  let fixture: ComponentFixture<ManagHelplinesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManagHelplinesComponent]
    });
    fixture = TestBed.createComponent(ManagHelplinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
