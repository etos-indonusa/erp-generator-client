import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogProcessShareAddComponent } from './log-process-share-add.component';

describe('LogProcessShareAddComponent', () => {
  let component: LogProcessShareAddComponent;
  let fixture: ComponentFixture<LogProcessShareAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LogProcessShareAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogProcessShareAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
