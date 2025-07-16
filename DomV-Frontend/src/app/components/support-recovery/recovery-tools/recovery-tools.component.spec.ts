import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecoveryToolsComponent } from './recovery-tools.component';

describe('RecoveryToolsComponent', () => {
  let component: RecoveryToolsComponent;
  let fixture: ComponentFixture<RecoveryToolsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecoveryToolsComponent]
    });
    fixture = TestBed.createComponent(RecoveryToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
