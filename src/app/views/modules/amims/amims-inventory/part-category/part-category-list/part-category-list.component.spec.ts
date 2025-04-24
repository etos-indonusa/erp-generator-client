import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartCategoryListComponent } from './part-category-list.component';

describe('PartCategoryListComponent', () => {
  let component: PartCategoryListComponent;
  let fixture: ComponentFixture<PartCategoryListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PartCategoryListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartCategoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
