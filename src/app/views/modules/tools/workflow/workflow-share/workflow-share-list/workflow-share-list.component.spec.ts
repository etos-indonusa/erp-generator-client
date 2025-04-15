import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkflowShareListComponent } from './workflow-share-list.component';

describe('WorkflowShareListComponent', () => {
  let component: WorkflowShareListComponent;
  let fixture: ComponentFixture<WorkflowShareListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkflowShareListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkflowShareListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
