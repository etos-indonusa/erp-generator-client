import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkflowStepShareDetailComponent } from './workflow-step-share-detail.component';

describe('WorkflowStepShareDetailComponent', () => {
  let component: WorkflowStepShareDetailComponent;
  let fixture: ComponentFixture<WorkflowStepShareDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkflowStepShareDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkflowStepShareDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
