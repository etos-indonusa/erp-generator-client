import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogTsnTsoListComponent } from './log-tsn-tso-list.component';

describe('LogTsnTsoListComponent', () => {
  let component: LogTsnTsoListComponent;
  let fixture: ComponentFixture<LogTsnTsoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LogTsnTsoListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogTsnTsoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
