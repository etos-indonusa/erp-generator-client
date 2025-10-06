import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkCompletedShareAddComponent } from './work-completed-share-add.component';

describe('WorkCompletedShareAddComponent', () => {
  let component: WorkCompletedShareAddComponent;
  let fixture: ComponentFixture<WorkCompletedShareAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkCompletedShareAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkCompletedShareAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
