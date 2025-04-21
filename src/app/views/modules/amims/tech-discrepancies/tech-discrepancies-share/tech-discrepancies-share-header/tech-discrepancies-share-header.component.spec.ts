import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechDiscrepanciesShareHeaderComponent } from './tech-discrepancies-share-header.component';

describe('TechDiscrepanciesShareHeaderComponent', () => {
  let component: TechDiscrepanciesShareHeaderComponent;
  let fixture: ComponentFixture<TechDiscrepanciesShareHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TechDiscrepanciesShareHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechDiscrepanciesShareHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
