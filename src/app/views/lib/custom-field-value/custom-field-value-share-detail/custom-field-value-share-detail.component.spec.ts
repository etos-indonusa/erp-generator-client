import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomFieldValueShareDetailComponent } from './custom-field-value-share-detail.component';

describe('CustomFieldValueShareDetailComponent', () => {
  let component: CustomFieldValueShareDetailComponent;
  let fixture: ComponentFixture<CustomFieldValueShareDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomFieldValueShareDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomFieldValueShareDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
