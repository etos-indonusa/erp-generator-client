import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartCategoryShareWidgetComponent } from './part-category-share-widget.component';

describe('PartCategoryShareWidgetComponent', () => {
  let component: PartCategoryShareWidgetComponent;
  let fixture: ComponentFixture<PartCategoryShareWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PartCategoryShareWidgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartCategoryShareWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
