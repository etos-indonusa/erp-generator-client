import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkflowStepListComponent } from './workflow-step-list.component.ts.ejs';

describe('WorkflowStepListComponent', () => {
  let component: WorkflowStepListComponent;
  let fixture: ComponentFixture<WorkflowStepListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkflowStepListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkflowStepListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
