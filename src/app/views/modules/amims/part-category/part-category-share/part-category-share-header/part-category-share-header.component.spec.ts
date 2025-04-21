import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartCategoryShareHeaderComponent } from './part-category-share-header.component';

describe('PartCategoryShareHeaderComponent', () => {
  let component: PartCategoryShareHeaderComponent;
  let fixture: ComponentFixture<PartCategoryShareHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PartCategoryShareHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartCategoryShareHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
