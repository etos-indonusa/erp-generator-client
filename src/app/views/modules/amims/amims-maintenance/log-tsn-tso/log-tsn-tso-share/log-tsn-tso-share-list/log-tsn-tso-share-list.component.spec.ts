import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogTsnTsoShareListComponent } from './log-tsn-tso-share-list.component';

describe('LogTsnTsoShareListComponent', () => {
  let component: LogTsnTsoShareListComponent;
  let fixture: ComponentFixture<LogTsnTsoShareListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LogTsnTsoShareListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogTsnTsoShareListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
