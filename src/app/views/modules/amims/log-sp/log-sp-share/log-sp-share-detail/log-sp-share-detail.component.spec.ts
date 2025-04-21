import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogSpShareDetailComponent } from './log-sp-share-detail.component';

describe('LogSpShareDetailComponent', () => {
  let component: LogSpShareDetailComponent;
  let fixture: ComponentFixture<LogSpShareDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LogSpShareDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogSpShareDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
