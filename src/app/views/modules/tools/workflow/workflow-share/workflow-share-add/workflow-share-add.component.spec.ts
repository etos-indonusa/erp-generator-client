import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkflowShareAddComponent } from './workflow-share-add.component';

describe('WorkflowShareAddComponent', () => {
  let component: WorkflowShareAddComponent;
  let fixture: ComponentFixture<WorkflowShareAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkflowShareAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkflowShareAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
