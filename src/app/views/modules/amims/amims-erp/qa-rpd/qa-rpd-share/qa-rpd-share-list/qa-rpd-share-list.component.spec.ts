import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QaRpdShareListComponent } from './qa-rpd-share-list.component';

describe('QaRpdShareListComponent', () => {
  let component: QaRpdShareListComponent;
  let fixture: ComponentFixture<QaRpdShareListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QaRpdShareListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QaRpdShareListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
