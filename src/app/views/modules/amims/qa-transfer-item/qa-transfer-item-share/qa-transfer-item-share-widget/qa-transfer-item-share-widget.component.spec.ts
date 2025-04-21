import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QaTransferItemShareWidgetComponent } from './qa-transfer-item-share-widget.component';

describe('QaTransferItemShareWidgetComponent', () => {
  let component: QaTransferItemShareWidgetComponent;
  let fixture: ComponentFixture<QaTransferItemShareWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QaTransferItemShareWidgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QaTransferItemShareWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
