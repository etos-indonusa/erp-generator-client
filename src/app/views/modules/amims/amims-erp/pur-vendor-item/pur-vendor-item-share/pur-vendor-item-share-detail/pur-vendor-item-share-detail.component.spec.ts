import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurVendorItemShareDetailComponent } from './pur-vendor-item-share-detail.component';

describe('PurVendorItemShareDetailComponent', () => {
  let component: PurVendorItemShareDetailComponent;
  let fixture: ComponentFixture<PurVendorItemShareDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PurVendorItemShareDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurVendorItemShareDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
