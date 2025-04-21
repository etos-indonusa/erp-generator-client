import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechDiscrepanciesShareDetailComponent } from './tech-discrepancies-share-detail.component';

describe('TechDiscrepanciesShareDetailComponent', () => {
  let component: TechDiscrepanciesShareDetailComponent;
  let fixture: ComponentFixture<TechDiscrepanciesShareDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TechDiscrepanciesShareDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechDiscrepanciesShareDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
