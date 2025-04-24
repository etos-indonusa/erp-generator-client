import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngineerPmtrItemShareDetailComponent } from './engineer-pmtr-item-share-detail.component';

describe('EngineerPmtrItemShareDetailComponent', () => {
  let component: EngineerPmtrItemShareDetailComponent;
  let fixture: ComponentFixture<EngineerPmtrItemShareDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EngineerPmtrItemShareDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EngineerPmtrItemShareDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
