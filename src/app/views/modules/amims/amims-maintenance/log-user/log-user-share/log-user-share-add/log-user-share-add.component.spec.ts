import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogUserShareAddComponent } from './log-user-share-add.component';

describe('LogUserShareAddComponent', () => {
  let component: LogUserShareAddComponent;
  let fixture: ComponentFixture<LogUserShareAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LogUserShareAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogUserShareAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
