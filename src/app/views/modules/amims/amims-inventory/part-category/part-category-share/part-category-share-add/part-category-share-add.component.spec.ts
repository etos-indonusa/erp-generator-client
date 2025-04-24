import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartCategoryShareAddComponent } from './part-category-share-add.component';

describe('PartCategoryShareAddComponent', () => {
  let component: PartCategoryShareAddComponent;
  let fixture: ComponentFixture<PartCategoryShareAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PartCategoryShareAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartCategoryShareAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
