import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QaRpdDispotitionShareListComponent } from './qa-rpd-dispotition-share-list.component';

describe('QaRpdDispotitionShareListComponent', () => {
  let component: QaRpdDispotitionShareListComponent;
  let fixture: ComponentFixture<QaRpdDispotitionShareListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QaRpdDispotitionShareListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QaRpdDispotitionShareListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
