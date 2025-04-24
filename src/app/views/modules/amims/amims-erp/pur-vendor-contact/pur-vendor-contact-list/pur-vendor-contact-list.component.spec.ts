import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurVendorContactListComponent } from './pur-vendor-contact-list.component';

describe('PurVendorContactListComponent', () => {
  let component: PurVendorContactListComponent;
  let fixture: ComponentFixture<PurVendorContactListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PurVendorContactListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurVendorContactListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
