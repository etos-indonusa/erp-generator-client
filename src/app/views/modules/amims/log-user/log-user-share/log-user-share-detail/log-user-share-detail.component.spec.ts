import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogUserShareDetailComponent } from './log-user-share-detail.component';

describe('LogUserShareDetailComponent', () => {
  let component: LogUserShareDetailComponent;
  let fixture: ComponentFixture<LogUserShareDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LogUserShareDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogUserShareDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
