import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PositionShareAddComponent } from './position-share-add.component';

describe('PositionShareAddComponent', () => {
  let component: PositionShareAddComponent;
  let fixture: ComponentFixture<PositionShareAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PositionShareAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PositionShareAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
