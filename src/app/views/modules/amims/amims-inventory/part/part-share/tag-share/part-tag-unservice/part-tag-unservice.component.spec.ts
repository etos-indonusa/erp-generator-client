import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartTagUnserviceComponent } from './part-tag-unservice.component';

describe('PartTagUnserviceComponent', () => {
  let component: PartTagUnserviceComponent;
  let fixture: ComponentFixture<PartTagUnserviceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PartTagUnserviceComponent]
    });
    fixture = TestBed.createComponent(PartTagUnserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
