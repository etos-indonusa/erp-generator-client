import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QaTransferItemShareAddComponent } from './qa-transfer-item-share-add.component';

describe('QaTransferItemShareAddComponent', () => {
  let component: QaTransferItemShareAddComponent;
  let fixture: ComponentFixture<QaTransferItemShareAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QaTransferItemShareAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QaTransferItemShareAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
