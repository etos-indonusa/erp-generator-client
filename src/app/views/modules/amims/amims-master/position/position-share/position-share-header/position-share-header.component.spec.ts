import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PositionShareHeaderComponent } from './position-share-header.component';

describe('PositionShareHeaderComponent', () => {
  let component: PositionShareHeaderComponent;
  let fixture: ComponentFixture<PositionShareHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PositionShareHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PositionShareHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
