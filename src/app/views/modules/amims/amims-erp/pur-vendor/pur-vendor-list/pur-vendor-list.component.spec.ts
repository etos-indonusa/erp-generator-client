import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurVendorListComponent } from './pur-vendor-list.component';

describe('PurVendorListComponent', () => {
  let component: PurVendorListComponent;
  let fixture: ComponentFixture<PurVendorListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PurVendorListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurVendorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
