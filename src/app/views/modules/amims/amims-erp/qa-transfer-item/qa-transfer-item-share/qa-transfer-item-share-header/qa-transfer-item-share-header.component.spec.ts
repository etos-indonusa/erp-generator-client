import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QaTransferItemShareHeaderComponent } from './qa-transfer-item-share-header.component';

describe('QaTransferItemShareHeaderComponent', () => {
  let component: QaTransferItemShareHeaderComponent;
  let fixture: ComponentFixture<QaTransferItemShareHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QaTransferItemShareHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QaTransferItemShareHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
