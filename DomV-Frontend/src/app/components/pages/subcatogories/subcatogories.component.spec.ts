import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubcatogoriesComponent } from './subcatogories.component';

describe('SubcatogoriesComponent', () => {
  let component: SubcatogoriesComponent;
  let fixture: ComponentFixture<SubcatogoriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubcatogoriesComponent]
    });
    fixture = TestBed.createComponent(SubcatogoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
