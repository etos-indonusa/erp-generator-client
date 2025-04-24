import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QaTransferItemShareDetailComponent } from './qa-transfer-item-share-detail.component';

describe('QaTransferItemShareDetailComponent', () => {
  let component: QaTransferItemShareDetailComponent;
  let fixture: ComponentFixture<QaTransferItemShareDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QaTransferItemShareDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QaTransferItemShareDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
