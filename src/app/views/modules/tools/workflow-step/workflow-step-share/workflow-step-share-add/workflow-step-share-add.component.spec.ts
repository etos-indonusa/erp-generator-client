import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkflowStepShareAddComponent } from './workflow-step-share-add.component';

describe('WorkflowStepShareAddComponent', () => {
  let component: WorkflowStepShareAddComponent;
  let fixture: ComponentFixture<WorkflowStepShareAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkflowStepShareAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkflowStepShareAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
