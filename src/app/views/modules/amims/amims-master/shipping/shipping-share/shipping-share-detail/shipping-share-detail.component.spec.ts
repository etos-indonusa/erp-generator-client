import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShippingShareDetailComponent } from './shipping-share-detail.component';

describe('ShippingShareDetailComponent', () => {
  let component: ShippingShareDetailComponent;
  let fixture: ComponentFixture<ShippingShareDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShippingShareDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShippingShareDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
