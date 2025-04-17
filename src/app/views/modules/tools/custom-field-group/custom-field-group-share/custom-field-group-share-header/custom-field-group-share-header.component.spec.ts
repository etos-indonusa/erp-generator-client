import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomFieldGroupShareHeaderComponent } from './custom-field-group-share-header.component';

describe('CustomFieldGroupShareHeaderComponent', () => {
  let component: CustomFieldGroupShareHeaderComponent;
  let fixture: ComponentFixture<CustomFieldGroupShareHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomFieldGroupShareHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomFieldGroupShareHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
