import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurVendorContactShareAddComponent } from './pur-vendor-contact-share-add.component';

describe('PurVendorContactShareAddComponent', () => {
  let component: PurVendorContactShareAddComponent;
  let fixture: ComponentFixture<PurVendorContactShareAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PurVendorContactShareAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurVendorContactShareAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
