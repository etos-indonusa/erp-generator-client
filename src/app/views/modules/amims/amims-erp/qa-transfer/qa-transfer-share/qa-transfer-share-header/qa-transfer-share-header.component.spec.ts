import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QaTransferShareHeaderComponent } from './qa-transfer-share-header.component';

describe('QaTransferShareHeaderComponent', () => {
  let component: QaTransferShareHeaderComponent;
  let fixture: ComponentFixture<QaTransferShareHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QaTransferShareHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QaTransferShareHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
