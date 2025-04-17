import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovalFormWidgetComponent } from './approval-form-widget.component';

describe('ApprovalFormWidgetComponent', () => {
  let component: ApprovalFormWidgetComponent;
  let fixture: ComponentFixture<ApprovalFormWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ApprovalFormWidgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApprovalFormWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
