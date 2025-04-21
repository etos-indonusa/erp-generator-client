import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QaTransferShareListComponent } from './qa-transfer-share-list.component';

describe('QaTransferShareListComponent', () => {
  let component: QaTransferShareListComponent;
  let fixture: ComponentFixture<QaTransferShareListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QaTransferShareListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QaTransferShareListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
