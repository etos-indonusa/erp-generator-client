import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurVendorContactShareDetailComponent } from './pur-vendor-contact-share-detail.component';

describe('PurVendorContactShareDetailComponent', () => {
  let component: PurVendorContactShareDetailComponent;
  let fixture: ComponentFixture<PurVendorContactShareDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PurVendorContactShareDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurVendorContactShareDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
