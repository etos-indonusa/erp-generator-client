import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomFieldShareDetailComponent } from './custom-field-share-detail.component';

describe('CustomFieldShareDetailComponent', () => {
  let component: CustomFieldShareDetailComponent;
  let fixture: ComponentFixture<CustomFieldShareDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomFieldShareDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomFieldShareDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
