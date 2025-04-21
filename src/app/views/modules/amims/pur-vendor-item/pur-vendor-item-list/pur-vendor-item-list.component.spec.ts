import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurVendorItemListComponent } from './pur-vendor-item-list.component';

describe('PurVendorItemListComponent', () => {
  let component: PurVendorItemListComponent;
  let fixture: ComponentFixture<PurVendorItemListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PurVendorItemListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurVendorItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
