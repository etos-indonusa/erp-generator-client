import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurVendorShareDetailComponent } from './pur-vendor-share-detail.component';

describe('PurVendorShareDetailComponent', () => {
  let component: PurVendorShareDetailComponent;
  let fixture: ComponentFixture<PurVendorShareDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PurVendorShareDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurVendorShareDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
