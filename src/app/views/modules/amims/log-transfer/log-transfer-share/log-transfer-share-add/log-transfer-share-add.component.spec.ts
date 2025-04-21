import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogTransferShareAddComponent } from './log-transfer-share-add.component';

describe('LogTransferShareAddComponent', () => {
  let component: LogTransferShareAddComponent;
  let fixture: ComponentFixture<LogTransferShareAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LogTransferShareAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogTransferShareAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
