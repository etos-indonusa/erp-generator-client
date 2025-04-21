import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartCategoryShareDetailComponent } from './part-category-share-detail.component';

describe('PartCategoryShareDetailComponent', () => {
  let component: PartCategoryShareDetailComponent;
  let fixture: ComponentFixture<PartCategoryShareDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PartCategoryShareDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartCategoryShareDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
