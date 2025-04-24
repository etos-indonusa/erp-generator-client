import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartFigureIndexShareDetailComponent } from './part-figure-index-share-detail.component';

describe('PartFigureIndexShareDetailComponent', () => {
  let component: PartFigureIndexShareDetailComponent;
  let fixture: ComponentFixture<PartFigureIndexShareDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PartFigureIndexShareDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartFigureIndexShareDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
