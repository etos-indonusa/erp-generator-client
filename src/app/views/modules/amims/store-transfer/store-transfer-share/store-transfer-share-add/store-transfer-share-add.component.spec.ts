import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreTransferShareAddComponent } from './store-transfer-share-add.component';

describe('StoreTransferShareAddComponent', () => {
  let component: StoreTransferShareAddComponent;
  let fixture: ComponentFixture<StoreTransferShareAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StoreTransferShareAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoreTransferShareAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
