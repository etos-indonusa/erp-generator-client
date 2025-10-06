import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkCompletedShareListComponent } from './work-completed-share-list.component';

describe('WorkCompletedShareListComponent', () => {
  let component: WorkCompletedShareListComponent;
  let fixture: ComponentFixture<WorkCompletedShareListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkCompletedShareListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkCompletedShareListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
