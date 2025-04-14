import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkflowStepAddJsonBuilderComponent } from './workflow-step-add-json-builder.component';

describe('WorkflowStepAddJsonBuilderComponent', () => {
  let component: WorkflowStepAddJsonBuilderComponent;
  let fixture: ComponentFixture<WorkflowStepAddJsonBuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkflowStepAddJsonBuilderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkflowStepAddJsonBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
