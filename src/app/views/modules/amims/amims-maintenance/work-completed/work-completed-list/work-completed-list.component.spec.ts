import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkCompletedListComponent } from './work-completed-list.component';

describe('WorkCompletedListComponent', () => {
  let component: WorkCompletedListComponent;
  let fixture: ComponentFixture<WorkCompletedListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkCompletedListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkCompletedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
