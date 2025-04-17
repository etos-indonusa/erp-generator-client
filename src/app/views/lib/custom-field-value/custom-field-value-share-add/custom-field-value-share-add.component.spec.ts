import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomFieldValueShareAddComponent } from './custom-field-value-share-add.component';

describe('CustomFieldValueShareAddComponent', () => {
  let component: CustomFieldValueShareAddComponent;
  let fixture: ComponentFixture<CustomFieldValueShareAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomFieldValueShareAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomFieldValueShareAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
