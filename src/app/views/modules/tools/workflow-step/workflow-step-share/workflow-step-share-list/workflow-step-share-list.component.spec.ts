import { ComponentFixture, TestBed } from '@angular/core/testing';
 
import { WorkflowStepShareListComponent } from './workflow-step-share-list.component';

describe('WorkflowStepShareListComponent', () => {
  let component: WorkflowStepShareListComponent;
  let fixture: ComponentFixture<WorkflowStepShareListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkflowStepShareListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkflowStepShareListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
