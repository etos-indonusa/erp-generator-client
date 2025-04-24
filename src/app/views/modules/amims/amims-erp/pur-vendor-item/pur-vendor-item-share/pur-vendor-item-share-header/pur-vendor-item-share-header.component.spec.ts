import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurVendorItemShareHeaderComponent } from './pur-vendor-item-share-header.component';

describe('PurVendorItemShareHeaderComponent', () => {
  let component: PurVendorItemShareHeaderComponent;
  let fixture: ComponentFixture<PurVendorItemShareHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PurVendorItemShareHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurVendorItemShareHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
