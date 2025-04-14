import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkflowLogShareAddComponent } from './workflow-log-share-add.component';

describe('WorkflowLogShareAddComponent', () => {
  let component: WorkflowLogShareAddComponent;
  let fixture: ComponentFixture<WorkflowLogShareAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkflowLogShareAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkflowLogShareAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
