import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomFieldGroupShareDetailComponent } from './custom-field-group-share-detail.component';

describe('CustomFieldGroupShareDetailComponent', () => {
  let component: CustomFieldGroupShareDetailComponent;
  let fixture: ComponentFixture<CustomFieldGroupShareDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomFieldGroupShareDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomFieldGroupShareDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
