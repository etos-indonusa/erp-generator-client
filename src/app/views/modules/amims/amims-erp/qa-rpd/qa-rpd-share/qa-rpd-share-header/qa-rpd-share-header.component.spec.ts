import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QaRpdShareHeaderComponent } from './qa-rpd-share-header.component';

describe('QaRpdShareHeaderComponent', () => {
  let component: QaRpdShareHeaderComponent;
  let fixture: ComponentFixture<QaRpdShareHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QaRpdShareHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QaRpdShareHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
