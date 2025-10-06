import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkCompletedShareWidgetComponent } from './work-completed-share-widget.component';

describe('WorkCompletedShareWidgetComponent', () => {
  let component: WorkCompletedShareWidgetComponent;
  let fixture: ComponentFixture<WorkCompletedShareWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkCompletedShareWidgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkCompletedShareWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
