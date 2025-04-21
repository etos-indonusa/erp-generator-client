import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurVendorContactShareWidgetComponent } from './pur-vendor-contact-share-widget.component';

describe('PurVendorContactShareWidgetComponent', () => {
  let component: PurVendorContactShareWidgetComponent;
  let fixture: ComponentFixture<PurVendorContactShareWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PurVendorContactShareWidgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurVendorContactShareWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
