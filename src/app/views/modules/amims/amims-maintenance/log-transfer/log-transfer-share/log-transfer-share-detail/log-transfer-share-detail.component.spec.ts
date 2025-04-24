import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogTransferShareDetailComponent } from './log-transfer-share-detail.component';

describe('LogTransferShareDetailComponent', () => {
  let component: LogTransferShareDetailComponent;
  let fixture: ComponentFixture<LogTransferShareDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LogTransferShareDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogTransferShareDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
