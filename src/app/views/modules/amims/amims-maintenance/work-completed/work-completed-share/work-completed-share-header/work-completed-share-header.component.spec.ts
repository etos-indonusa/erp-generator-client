import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkCompletedShareHeaderComponent } from './work-completed-share-header.component';

describe('WorkCompletedShareHeaderComponent', () => {
  let component: WorkCompletedShareHeaderComponent;
  let fixture: ComponentFixture<WorkCompletedShareHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkCompletedShareHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkCompletedShareHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
