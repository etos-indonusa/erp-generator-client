import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QaRpdDispotitionListComponent } from './qa-rpd-dispotition-list.component';

describe('QaRpdDispotitionListComponent', () => {
  let component: QaRpdDispotitionListComponent;
  let fixture: ComponentFixture<QaRpdDispotitionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QaRpdDispotitionListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QaRpdDispotitionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
