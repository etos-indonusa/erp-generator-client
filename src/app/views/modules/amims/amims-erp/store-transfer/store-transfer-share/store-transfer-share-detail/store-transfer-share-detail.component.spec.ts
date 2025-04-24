import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreTransferShareDetailComponent } from './store-transfer-share-detail.component';

describe('StoreTransferShareDetailComponent', () => {
  let component: StoreTransferShareDetailComponent;
  let fixture: ComponentFixture<StoreTransferShareDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StoreTransferShareDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoreTransferShareDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
