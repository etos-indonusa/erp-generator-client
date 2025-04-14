import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkflowShareWidgetComponent } from './workflow-share-widget.component.ts.ejs';

describe('WorkflowShareWidgetComponent', () => {
  let component: WorkflowShareWidgetComponent;
  let fixture: ComponentFixture<WorkflowShareWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkflowShareWidgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkflowShareWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
