import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogTsnTsoShareDetailComponent } from './log-tsn-tso-share-detail.component';

describe('LogTsnTsoShareDetailComponent', () => {
  let component: LogTsnTsoShareDetailComponent;
  let fixture: ComponentFixture<LogTsnTsoShareDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LogTsnTsoShareDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogTsnTsoShareDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
