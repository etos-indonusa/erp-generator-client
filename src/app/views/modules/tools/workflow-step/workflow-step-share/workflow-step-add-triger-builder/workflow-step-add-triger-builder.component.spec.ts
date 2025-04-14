import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkflowStepAddTrigerBuilderComponent } from './workflow-step-add-triger-builder.component';

describe('WorkflowStepAddTrigerBuilderComponent', () => {
  let component: WorkflowStepAddTrigerBuilderComponent;
  let fixture: ComponentFixture<WorkflowStepAddTrigerBuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkflowStepAddTrigerBuilderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkflowStepAddTrigerBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
