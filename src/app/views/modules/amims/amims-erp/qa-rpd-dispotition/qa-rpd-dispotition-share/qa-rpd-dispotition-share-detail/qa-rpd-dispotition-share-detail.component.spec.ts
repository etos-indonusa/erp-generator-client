import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QaRpdDispotitionShareDetailComponent } from './qa-rpd-dispotition-share-detail.component';

describe('QaRpdDispotitionShareDetailComponent', () => {
  let component: QaRpdDispotitionShareDetailComponent;
  let fixture: ComponentFixture<QaRpdDispotitionShareDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QaRpdDispotitionShareDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QaRpdDispotitionShareDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
