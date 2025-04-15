import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkflowStepShareHeaderComponent } from './workflow-step-share-header.component';

describe('WorkflowStepShareHeaderComponent', () => {
  let component: WorkflowStepShareHeaderComponent;
  let fixture: ComponentFixture<WorkflowStepShareHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkflowStepShareHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkflowStepShareHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
