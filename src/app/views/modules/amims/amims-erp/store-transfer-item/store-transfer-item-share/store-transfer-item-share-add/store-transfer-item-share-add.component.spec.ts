import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreTransferItemShareAddComponent } from './store-transfer-item-share-add.component';

describe('StoreTransferItemShareAddComponent', () => {
  let component: StoreTransferItemShareAddComponent;
  let fixture: ComponentFixture<StoreTransferItemShareAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StoreTransferItemShareAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoreTransferItemShareAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
