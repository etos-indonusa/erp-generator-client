import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechDiscrepanciesShareAddComponent } from './tech-discrepancies-share-add.component';

describe('TechDiscrepanciesShareAddComponent', () => {
  let component: TechDiscrepanciesShareAddComponent;
  let fixture: ComponentFixture<TechDiscrepanciesShareAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TechDiscrepanciesShareAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechDiscrepanciesShareAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
