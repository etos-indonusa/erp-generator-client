import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurVendorContactShareHeaderComponent } from './pur-vendor-contact-share-header.component';

describe('PurVendorContactShareHeaderComponent', () => {
  let component: PurVendorContactShareHeaderComponent;
  let fixture: ComponentFixture<PurVendorContactShareHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PurVendorContactShareHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurVendorContactShareHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
