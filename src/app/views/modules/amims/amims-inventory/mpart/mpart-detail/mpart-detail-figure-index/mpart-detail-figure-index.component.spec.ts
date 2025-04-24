import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MpartDetailFigureIndexComponent } from './mpart-detail-figure-index.component';

describe('MpartDetailFigureIndexComponent', () => {
  let component: MpartDetailFigureIndexComponent;
  let fixture: ComponentFixture<MpartDetailFigureIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MpartDetailFigureIndexComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MpartDetailFigureIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
