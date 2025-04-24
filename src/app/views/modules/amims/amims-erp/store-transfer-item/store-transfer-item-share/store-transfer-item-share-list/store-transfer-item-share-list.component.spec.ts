import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreTransferItemShareListComponent } from './store-transfer-item-share-list.component';

describe('StoreTransferItemShareListComponent', () => {
  let component: StoreTransferItemShareListComponent;
  let fixture: ComponentFixture<StoreTransferItemShareListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StoreTransferItemShareListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoreTransferItemShareListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
