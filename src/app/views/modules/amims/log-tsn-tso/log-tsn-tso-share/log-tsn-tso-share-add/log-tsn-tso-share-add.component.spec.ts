import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogTsnTsoShareAddComponent } from './log-tsn-tso-share-add.component';

describe('LogTsnTsoShareAddComponent', () => {
  let component: LogTsnTsoShareAddComponent;
  let fixture: ComponentFixture<LogTsnTsoShareAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LogTsnTsoShareAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogTsnTsoShareAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
