import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartFigureIndexListComponent } from './part-figure-index-list.component';

describe('PartFigureIndexListComponent', () => {
  let component: PartFigureIndexListComponent;
  let fixture: ComponentFixture<PartFigureIndexListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PartFigureIndexListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartFigureIndexListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
