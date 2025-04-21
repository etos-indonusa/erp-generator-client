import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreTransferItemListComponent } from './store-transfer-item-list.component';

describe('StoreTransferItemListComponent', () => {
  let component: StoreTransferItemListComponent;
  let fixture: ComponentFixture<StoreTransferItemListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StoreTransferItemListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoreTransferItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
