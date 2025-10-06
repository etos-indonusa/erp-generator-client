import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkCompletedShareDetailComponent } from './work-completed-share-detail.component';

describe('WorkCompletedShareDetailComponent', () => {
  let component: WorkCompletedShareDetailComponent;
  let fixture: ComponentFixture<WorkCompletedShareDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkCompletedShareDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkCompletedShareDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
