import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartCategoryShareListComponent } from './part-category-share-list.component';

describe('PartCategoryShareListComponent', () => {
  let component: PartCategoryShareListComponent;
  let fixture: ComponentFixture<PartCategoryShareListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PartCategoryShareListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartCategoryShareListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
