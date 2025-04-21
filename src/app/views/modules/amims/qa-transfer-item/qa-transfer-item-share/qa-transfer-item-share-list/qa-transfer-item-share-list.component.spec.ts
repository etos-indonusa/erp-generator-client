import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QaTransferItemShareListComponent } from './qa-transfer-item-share-list.component';

describe('QaTransferItemShareListComponent', () => {
  let component: QaTransferItemShareListComponent;
  let fixture: ComponentFixture<QaTransferItemShareListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QaTransferItemShareListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QaTransferItemShareListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
