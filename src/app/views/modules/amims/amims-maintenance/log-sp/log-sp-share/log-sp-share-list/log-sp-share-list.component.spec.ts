import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogSpShareListComponent } from './log-sp-share-list.component';

describe('LogSpShareListComponent', () => {
  let component: LogSpShareListComponent;
  let fixture: ComponentFixture<LogSpShareListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LogSpShareListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogSpShareListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
