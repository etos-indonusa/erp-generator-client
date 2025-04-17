import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomFieldShareAddComponent } from './custom-field-share-add.component';

describe('CustomFieldShareAddComponent', () => {
  let component: CustomFieldShareAddComponent;
  let fixture: ComponentFixture<CustomFieldShareAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomFieldShareAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomFieldShareAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
