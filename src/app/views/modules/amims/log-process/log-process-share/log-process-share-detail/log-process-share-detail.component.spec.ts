import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogProcessShareDetailComponent } from './log-process-share-detail.component';

describe('LogProcessShareDetailComponent', () => {
  let component: LogProcessShareDetailComponent;
  let fixture: ComponentFixture<LogProcessShareDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LogProcessShareDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogProcessShareDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
