import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QaTransferShareWidgetComponent } from './qa-transfer-share-widget.component';

describe('QaTransferShareWidgetComponent', () => {
  let component: QaTransferShareWidgetComponent;
  let fixture: ComponentFixture<QaTransferShareWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QaTransferShareWidgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QaTransferShareWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
