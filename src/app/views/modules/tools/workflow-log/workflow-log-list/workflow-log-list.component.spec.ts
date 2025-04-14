import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkflowLogListComponent } from './workflow-log-list.component.ts.ejs';

describe('WorkflowLogListComponent', () => {
  let component: WorkflowLogListComponent;
  let fixture: ComponentFixture<WorkflowLogListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkflowLogListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkflowLogListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
