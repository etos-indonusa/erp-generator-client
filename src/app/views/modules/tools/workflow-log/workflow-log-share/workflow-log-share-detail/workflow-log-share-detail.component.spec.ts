import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkflowLogShareDetailComponent } from './workflow-log-share-detail.component.ts.ejs';

describe('WorkflowLogShareDetailComponent', () => {
  let component: WorkflowLogShareDetailComponent;
  let fixture: ComponentFixture<WorkflowLogShareDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkflowLogShareDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkflowLogShareDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
