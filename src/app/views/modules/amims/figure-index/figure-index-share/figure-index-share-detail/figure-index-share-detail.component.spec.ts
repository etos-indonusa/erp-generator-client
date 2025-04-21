import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FigureIndexShareDetailComponent } from './figure-index-share-detail.component';

describe('FigureIndexShareDetailComponent', () => {
  let component: FigureIndexShareDetailComponent;
  let fixture: ComponentFixture<FigureIndexShareDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FigureIndexShareDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FigureIndexShareDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
