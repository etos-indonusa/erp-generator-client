import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QaRpdDispotitionShareHeaderComponent } from './qa-rpd-dispotition-share-header.component';

describe('QaRpdDispotitionShareHeaderComponent', () => {
  let component: QaRpdDispotitionShareHeaderComponent;
  let fixture: ComponentFixture<QaRpdDispotitionShareHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QaRpdDispotitionShareHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QaRpdDispotitionShareHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
