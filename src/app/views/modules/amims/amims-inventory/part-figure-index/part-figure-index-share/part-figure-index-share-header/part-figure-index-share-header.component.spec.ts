import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartFigureIndexShareHeaderComponent } from './part-figure-index-share-header.component';

describe('PartFigureIndexShareHeaderComponent', () => {
  let component: PartFigureIndexShareHeaderComponent;
  let fixture: ComponentFixture<PartFigureIndexShareHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PartFigureIndexShareHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartFigureIndexShareHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
