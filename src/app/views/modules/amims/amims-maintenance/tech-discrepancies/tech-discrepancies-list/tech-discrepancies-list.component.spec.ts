import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechDiscrepanciesListComponent } from './tech-discrepancies-list.component';

describe('TechDiscrepanciesListComponent', () => {
  let component: TechDiscrepanciesListComponent;
  let fixture: ComponentFixture<TechDiscrepanciesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TechDiscrepanciesListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechDiscrepanciesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
