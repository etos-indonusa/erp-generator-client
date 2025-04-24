import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PositionShareDetailComponent } from './position-share-detail.component';

describe('PositionShareDetailComponent', () => {
  let component: PositionShareDetailComponent;
  let fixture: ComponentFixture<PositionShareDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PositionShareDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PositionShareDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
