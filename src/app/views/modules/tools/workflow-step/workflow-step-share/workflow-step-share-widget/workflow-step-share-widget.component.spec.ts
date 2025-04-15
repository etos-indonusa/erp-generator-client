import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkflowStepShareWidgetComponent } from './workflow-step-share-widget.component';

describe('WorkflowStepShareWidgetComponent', () => {
  let component: WorkflowStepShareWidgetComponent;
  let fixture: ComponentFixture<WorkflowStepShareWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkflowStepShareWidgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkflowStepShareWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
