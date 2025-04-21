import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogTsnTsoShareHeaderComponent } from './log-tsn-tso-share-header.component';

describe('LogTsnTsoShareHeaderComponent', () => {
  let component: LogTsnTsoShareHeaderComponent;
  let fixture: ComponentFixture<LogTsnTsoShareHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LogTsnTsoShareHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogTsnTsoShareHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
