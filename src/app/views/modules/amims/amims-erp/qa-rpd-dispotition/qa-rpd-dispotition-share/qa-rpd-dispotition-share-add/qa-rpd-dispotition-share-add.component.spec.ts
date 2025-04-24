import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QaRpdDispotitionShareAddComponent } from './qa-rpd-dispotition-share-add.component';

describe('QaRpdDispotitionShareAddComponent', () => {
  let component: QaRpdDispotitionShareAddComponent;
  let fixture: ComponentFixture<QaRpdDispotitionShareAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QaRpdDispotitionShareAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QaRpdDispotitionShareAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
