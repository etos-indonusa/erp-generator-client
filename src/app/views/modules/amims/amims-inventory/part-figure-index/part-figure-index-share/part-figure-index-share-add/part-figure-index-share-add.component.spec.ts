import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartFigureIndexShareAddComponent } from './part-figure-index-share-add.component';

describe('PartFigureIndexShareAddComponent', () => {
  let component: PartFigureIndexShareAddComponent;
  let fixture: ComponentFixture<PartFigureIndexShareAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PartFigureIndexShareAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartFigureIndexShareAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
