import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovalLogsComponent } from './approval-logs.component';

describe('ApprovalLogsComponent', () => {
  let component: ApprovalLogsComponent;
  let fixture: ComponentFixture<ApprovalLogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ApprovalLogsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApprovalLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
