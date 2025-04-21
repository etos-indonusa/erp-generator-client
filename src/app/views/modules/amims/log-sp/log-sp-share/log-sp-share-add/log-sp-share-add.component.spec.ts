import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogSpShareAddComponent } from './log-sp-share-add.component';

describe('LogSpShareAddComponent', () => {
  let component: LogSpShareAddComponent;
  let fixture: ComponentFixture<LogSpShareAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LogSpShareAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogSpShareAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
