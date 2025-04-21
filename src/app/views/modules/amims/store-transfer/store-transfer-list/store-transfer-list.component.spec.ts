import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreTransferListComponent } from './store-transfer-list.component';

describe('StoreTransferListComponent', () => {
  let component: StoreTransferListComponent;
  let fixture: ComponentFixture<StoreTransferListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StoreTransferListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoreTransferListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
