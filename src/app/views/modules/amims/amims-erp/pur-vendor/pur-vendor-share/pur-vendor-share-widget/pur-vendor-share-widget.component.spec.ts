import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurVendorShareWidgetComponent } from './pur-vendor-share-widget.component';

describe('PurVendorShareWidgetComponent', () => {
  let component: PurVendorShareWidgetComponent;
  let fixture: ComponentFixture<PurVendorShareWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PurVendorShareWidgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurVendorShareWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
