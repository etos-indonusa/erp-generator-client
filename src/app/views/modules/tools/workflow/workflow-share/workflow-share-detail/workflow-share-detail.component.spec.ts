import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkflowShareDetailComponent } from './workflow-share-detail.component.ts.ejs';

describe('WorkflowShareDetailComponent', () => {
  let component: WorkflowShareDetailComponent;
  let fixture: ComponentFixture<WorkflowShareDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkflowShareDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkflowShareDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
