import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogSpListComponent } from './log-sp-list.component';

describe('LogSpListComponent', () => {
  let component: LogSpListComponent;
  let fixture: ComponentFixture<LogSpListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LogSpListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogSpListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
