import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogProcessShareHeaderComponent } from './log-process-share-header.component';

describe('LogProcessShareHeaderComponent', () => {
  let component: LogProcessShareHeaderComponent;
  let fixture: ComponentFixture<LogProcessShareHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LogProcessShareHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogProcessShareHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
