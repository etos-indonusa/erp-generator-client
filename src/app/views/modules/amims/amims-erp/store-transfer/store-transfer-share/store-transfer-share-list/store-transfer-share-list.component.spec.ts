import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreTransferShareListComponent } from './store-transfer-share-list.component';

describe('StoreTransferShareListComponent', () => {
  let component: StoreTransferShareListComponent;
  let fixture: ComponentFixture<StoreTransferShareListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StoreTransferShareListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoreTransferShareListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
