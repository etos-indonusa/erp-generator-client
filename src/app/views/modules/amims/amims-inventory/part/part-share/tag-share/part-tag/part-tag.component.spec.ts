import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartTagComponent } from './part-tag.component';

describe('PartTagComponent', () => {
  let component: PartTagComponent;
  let fixture: ComponentFixture<PartTagComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PartTagComponent]
    });
    fixture = TestBed.createComponent(PartTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
