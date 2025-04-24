import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreTransferShareHeaderComponent } from './store-transfer-share-header.component';

describe('StoreTransferShareHeaderComponent', () => {
  let component: StoreTransferShareHeaderComponent;
  let fixture: ComponentFixture<StoreTransferShareHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StoreTransferShareHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoreTransferShareHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
