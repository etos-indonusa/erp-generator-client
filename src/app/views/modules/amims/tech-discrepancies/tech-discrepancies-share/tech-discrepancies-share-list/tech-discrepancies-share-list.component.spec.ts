import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechDiscrepanciesShareListComponent } from './tech-discrepancies-share-list.component';

describe('TechDiscrepanciesShareListComponent', () => {
  let component: TechDiscrepanciesShareListComponent;
  let fixture: ComponentFixture<TechDiscrepanciesShareListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TechDiscrepanciesShareListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechDiscrepanciesShareListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
