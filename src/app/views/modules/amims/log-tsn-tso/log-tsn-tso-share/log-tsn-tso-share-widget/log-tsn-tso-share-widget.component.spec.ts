import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogTsnTsoShareWidgetComponent } from './log-tsn-tso-share-widget.component';

describe('LogTsnTsoShareWidgetComponent', () => {
  let component: LogTsnTsoShareWidgetComponent;
  let fixture: ComponentFixture<LogTsnTsoShareWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LogTsnTsoShareWidgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogTsnTsoShareWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
