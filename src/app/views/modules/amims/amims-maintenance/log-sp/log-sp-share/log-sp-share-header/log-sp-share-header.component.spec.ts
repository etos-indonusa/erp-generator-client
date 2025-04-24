import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogSpShareHeaderComponent } from './log-sp-share-header.component';

describe('LogSpShareHeaderComponent', () => {
  let component: LogSpShareHeaderComponent;
  let fixture: ComponentFixture<LogSpShareHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LogSpShareHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogSpShareHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
