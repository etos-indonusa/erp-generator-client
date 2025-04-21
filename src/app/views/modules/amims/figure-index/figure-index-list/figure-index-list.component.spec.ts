import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FigureIndexListComponent } from './figure-index-list.component';

describe('FigureIndexListComponent', () => {
  let component: FigureIndexListComponent;
  let fixture: ComponentFixture<FigureIndexListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FigureIndexListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FigureIndexListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
