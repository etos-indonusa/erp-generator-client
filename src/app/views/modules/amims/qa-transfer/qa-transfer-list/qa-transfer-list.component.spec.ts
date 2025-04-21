import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QaTransferListComponent } from './qa-transfer-list.component';

describe('QaTransferListComponent', () => {
  let component: QaTransferListComponent;
  let fixture: ComponentFixture<QaTransferListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QaTransferListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QaTransferListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
