import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurVendorItemShareListComponent } from './pur-vendor-item-share-list.component';

describe('PurVendorItemShareListComponent', () => {
  let component: PurVendorItemShareListComponent;
  let fixture: ComponentFixture<PurVendorItemShareListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PurVendorItemShareListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurVendorItemShareListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
