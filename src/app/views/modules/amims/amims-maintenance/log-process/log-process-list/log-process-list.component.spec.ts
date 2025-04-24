import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogProcessListComponent } from './log-process-list.component';

describe('LogProcessListComponent', () => {
  let component: LogProcessListComponent;
  let fixture: ComponentFixture<LogProcessListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LogProcessListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogProcessListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
