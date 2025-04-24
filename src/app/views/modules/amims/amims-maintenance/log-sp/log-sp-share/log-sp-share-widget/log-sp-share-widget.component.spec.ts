import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogSpShareWidgetComponent } from './log-sp-share-widget.component';

describe('LogSpShareWidgetComponent', () => {
  let component: LogSpShareWidgetComponent;
  let fixture: ComponentFixture<LogSpShareWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LogSpShareWidgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogSpShareWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
