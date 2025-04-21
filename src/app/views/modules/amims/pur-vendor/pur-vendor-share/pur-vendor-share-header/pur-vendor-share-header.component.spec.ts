import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurVendorShareHeaderComponent } from './pur-vendor-share-header.component';

describe('PurVendorShareHeaderComponent', () => {
  let component: PurVendorShareHeaderComponent;
  let fixture: ComponentFixture<PurVendorShareHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PurVendorShareHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurVendorShareHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
