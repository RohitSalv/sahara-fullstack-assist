import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSuccessStoriesComponent } from './user-success-stories.component';

describe('UserSuccessStoriesComponent', () => {
  let component: UserSuccessStoriesComponent;
  let fixture: ComponentFixture<UserSuccessStoriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserSuccessStoriesComponent]
    });
    fixture = TestBed.createComponent(UserSuccessStoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
