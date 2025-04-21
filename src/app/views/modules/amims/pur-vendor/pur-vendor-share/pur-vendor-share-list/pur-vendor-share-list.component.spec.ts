import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurVendorShareListComponent } from './pur-vendor-share-list.component';

describe('PurVendorShareListComponent', () => {
  let component: PurVendorShareListComponent;
  let fixture: ComponentFixture<PurVendorShareListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PurVendorShareListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurVendorShareListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
