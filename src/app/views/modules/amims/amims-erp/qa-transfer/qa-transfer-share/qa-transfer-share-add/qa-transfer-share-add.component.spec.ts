import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QaTransferShareAddComponent } from './qa-transfer-share-add.component';

describe('QaTransferShareAddComponent', () => {
  let component: QaTransferShareAddComponent;
  let fixture: ComponentFixture<QaTransferShareAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QaTransferShareAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QaTransferShareAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
