import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurVendorItemShareWidgetComponent } from './pur-vendor-item-share-widget.component';

describe('PurVendorItemShareWidgetComponent', () => {
  let component: PurVendorItemShareWidgetComponent;
  let fixture: ComponentFixture<PurVendorItemShareWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PurVendorItemShareWidgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurVendorItemShareWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
