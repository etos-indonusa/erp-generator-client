import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QaTransferShareDetailComponent } from './qa-transfer-share-detail.component';

describe('QaTransferShareDetailComponent', () => {
  let component: QaTransferShareDetailComponent;
  let fixture: ComponentFixture<QaTransferShareDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QaTransferShareDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QaTransferShareDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
