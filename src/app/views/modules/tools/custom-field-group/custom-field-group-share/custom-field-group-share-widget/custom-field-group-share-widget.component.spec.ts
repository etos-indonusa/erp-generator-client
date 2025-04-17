import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomFieldGroupShareWidgetComponent } from './custom-field-group-share-widget.component';

describe('CustomFieldGroupShareWidgetComponent', () => {
  let component: CustomFieldGroupShareWidgetComponent;
  let fixture: ComponentFixture<CustomFieldGroupShareWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomFieldGroupShareWidgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomFieldGroupShareWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
