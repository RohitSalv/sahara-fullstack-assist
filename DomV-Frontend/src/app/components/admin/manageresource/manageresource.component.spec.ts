import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageresourceComponent } from './manageresource.component';

describe('ManageresourceComponent', () => {
  let component: ManageresourceComponent;
  let fixture: ComponentFixture<ManageresourceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManageresourceComponent]
    });
    fixture = TestBed.createComponent(ManageresourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
