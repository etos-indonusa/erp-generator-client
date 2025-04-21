import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartFigureIndexShareListComponent } from './part-figure-index-share-list.component';

describe('PartFigureIndexShareListComponent', () => {
  let component: PartFigureIndexShareListComponent;
  let fixture: ComponentFixture<PartFigureIndexShareListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PartFigureIndexShareListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartFigureIndexShareListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
