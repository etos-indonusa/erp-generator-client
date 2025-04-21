import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreTransferItemShareHeaderComponent } from './store-transfer-item-share-header.component';

describe('StoreTransferItemShareHeaderComponent', () => {
  let component: StoreTransferItemShareHeaderComponent;
  let fixture: ComponentFixture<StoreTransferItemShareHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StoreTransferItemShareHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoreTransferItemShareHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
