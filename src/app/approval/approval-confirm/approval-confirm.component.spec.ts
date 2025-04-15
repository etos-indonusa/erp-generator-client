import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovalConfirmComponent } from './approval-confirm.component';

describe('ApprovalConfirmComponent', () => {
  let component: ApprovalConfirmComponent;
  let fixture: ComponentFixture<ApprovalConfirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ApprovalConfirmComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApprovalConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
