import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurVendorItemShareAddComponent } from './pur-vendor-item-share-add.component';

describe('PurVendorItemShareAddComponent', () => {
  let component: PurVendorItemShareAddComponent;
  let fixture: ComponentFixture<PurVendorItemShareAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PurVendorItemShareAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurVendorItemShareAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
