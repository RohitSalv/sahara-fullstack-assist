import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageSuccessStoriesComponentComponent } from './manage-success-stories-component.component';

describe('ManageSuccessStoriesComponentComponent', () => {
  let component: ManageSuccessStoriesComponentComponent;
  let fixture: ComponentFixture<ManageSuccessStoriesComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManageSuccessStoriesComponentComponent]
    });
    fixture = TestBed.createComponent(ManageSuccessStoriesComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
