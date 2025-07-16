import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickExistComponent } from './quick-exist.component';

describe('QuickExistComponent', () => {
  let component: QuickExistComponent;
  let fixture: ComponentFixture<QuickExistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuickExistComponent]
    });
    fixture = TestBed.createComponent(QuickExistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
