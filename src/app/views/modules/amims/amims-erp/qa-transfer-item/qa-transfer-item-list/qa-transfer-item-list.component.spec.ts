import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QaTransferItemListComponent } from './qa-transfer-item-list.component';

describe('QaTransferItemListComponent', () => {
  let component: QaTransferItemListComponent;
  let fixture: ComponentFixture<QaTransferItemListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QaTransferItemListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QaTransferItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
