import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShippingShareAddComponent } from './shipping-share-add.component';

describe('ShippingShareAddComponent', () => {
  let component: ShippingShareAddComponent;
  let fixture: ComponentFixture<ShippingShareAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShippingShareAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShippingShareAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
