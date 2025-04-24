import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QaRpdListComponent } from './qa-rpd-list.component';

describe('QaRpdListComponent', () => {
  let component: QaRpdListComponent;
  let fixture: ComponentFixture<QaRpdListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QaRpdListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QaRpdListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
