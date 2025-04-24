import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QaRpdShareDetailComponent } from './qa-rpd-share-detail.component';

describe('QaRpdShareDetailComponent', () => {
  let component: QaRpdShareDetailComponent;
  let fixture: ComponentFixture<QaRpdShareDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QaRpdShareDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QaRpdShareDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
