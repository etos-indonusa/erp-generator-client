import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomFieldGroupShareAddComponent } from './custom-field-group-share-add.component';

describe('CustomFieldGroupShareAddComponent', () => {
  let component: CustomFieldGroupShareAddComponent;
  let fixture: ComponentFixture<CustomFieldGroupShareAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomFieldGroupShareAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomFieldGroupShareAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
