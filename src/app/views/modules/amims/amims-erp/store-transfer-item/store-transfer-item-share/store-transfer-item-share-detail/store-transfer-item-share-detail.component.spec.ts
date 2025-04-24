import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreTransferItemShareDetailComponent } from './store-transfer-item-share-detail.component';

describe('StoreTransferItemShareDetailComponent', () => {
  let component: StoreTransferItemShareDetailComponent;
  let fixture: ComponentFixture<StoreTransferItemShareDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StoreTransferItemShareDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoreTransferItemShareDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
