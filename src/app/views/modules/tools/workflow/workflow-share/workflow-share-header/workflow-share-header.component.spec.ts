import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkflowShareHeaderComponent } from './workflow-share-header.component';

describe('WorkflowShareHeaderComponent', () => {
  let component: WorkflowShareHeaderComponent;
  let fixture: ComponentFixture<WorkflowShareHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkflowShareHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkflowShareHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
