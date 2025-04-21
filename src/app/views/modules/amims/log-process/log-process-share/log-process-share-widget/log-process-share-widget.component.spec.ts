import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogProcessShareWidgetComponent } from './log-process-share-widget.component';

describe('LogProcessShareWidgetComponent', () => {
  let component: LogProcessShareWidgetComponent;
  let fixture: ComponentFixture<LogProcessShareWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LogProcessShareWidgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogProcessShareWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
