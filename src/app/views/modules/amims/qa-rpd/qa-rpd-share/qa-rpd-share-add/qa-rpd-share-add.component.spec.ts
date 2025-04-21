import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QaRpdShareAddComponent } from './qa-rpd-share-add.component';

describe('QaRpdShareAddComponent', () => {
  let component: QaRpdShareAddComponent;
  let fixture: ComponentFixture<QaRpdShareAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QaRpdShareAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QaRpdShareAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
