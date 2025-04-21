import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurVendorShareAddComponent } from './pur-vendor-share-add.component';

describe('PurVendorShareAddComponent', () => {
  let component: PurVendorShareAddComponent;
  let fixture: ComponentFixture<PurVendorShareAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PurVendorShareAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurVendorShareAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
