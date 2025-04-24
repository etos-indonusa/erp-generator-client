import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogProcessShareListComponent } from './log-process-share-list.component';

describe('LogProcessShareListComponent', () => {
  let component: LogProcessShareListComponent;
  let fixture: ComponentFixture<LogProcessShareListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LogProcessShareListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogProcessShareListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
