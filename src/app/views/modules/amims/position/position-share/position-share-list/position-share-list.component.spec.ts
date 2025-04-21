import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PositionShareListComponent } from './position-share-list.component';

describe('PositionShareListComponent', () => {
  let component: PositionShareListComponent;
  let fixture: ComponentFixture<PositionShareListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PositionShareListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PositionShareListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
