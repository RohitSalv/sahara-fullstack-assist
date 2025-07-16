import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSuccessStoryComponent } from './add-success-story.component';

describe('AddSuccessStoryComponent', () => {
  let component: AddSuccessStoryComponent;
  let fixture: ComponentFixture<AddSuccessStoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddSuccessStoryComponent]
    });
    fixture = TestBed.createComponent(AddSuccessStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
