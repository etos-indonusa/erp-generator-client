import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogUserListComponent } from './log-user-list.component';

describe('LogUserListComponent', () => {
  let component: LogUserListComponent;
  let fixture: ComponentFixture<LogUserListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LogUserListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogUserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
