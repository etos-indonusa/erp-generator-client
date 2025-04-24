import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FigureIndexShareAddComponent } from './figure-index-share-add.component';

describe('FigureIndexShareAddComponent', () => {
  let component: FigureIndexShareAddComponent;
  let fixture: ComponentFixture<FigureIndexShareAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FigureIndexShareAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FigureIndexShareAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
