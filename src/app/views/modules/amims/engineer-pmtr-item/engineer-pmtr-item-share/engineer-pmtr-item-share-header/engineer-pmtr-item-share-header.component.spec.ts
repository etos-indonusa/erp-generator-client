import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngineerPmtrItemShareHeaderComponent } from './engineer-pmtr-item-share-header.component';

describe('EngineerPmtrItemShareHeaderComponent', () => {
  let component: EngineerPmtrItemShareHeaderComponent;
  let fixture: ComponentFixture<EngineerPmtrItemShareHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EngineerPmtrItemShareHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EngineerPmtrItemShareHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
