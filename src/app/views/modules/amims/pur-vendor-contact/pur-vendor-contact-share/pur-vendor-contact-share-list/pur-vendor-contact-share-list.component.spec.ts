import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurVendorContactShareListComponent } from './pur-vendor-contact-share-list.component';

describe('PurVendorContactShareListComponent', () => {
  let component: PurVendorContactShareListComponent;
  let fixture: ComponentFixture<PurVendorContactShareListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PurVendorContactShareListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurVendorContactShareListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
