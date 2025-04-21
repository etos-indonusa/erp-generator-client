import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogTransferListComponent } from './log-transfer-list.component';

describe('LogTransferListComponent', () => {
  let component: LogTransferListComponent;
  let fixture: ComponentFixture<LogTransferListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LogTransferListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogTransferListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
