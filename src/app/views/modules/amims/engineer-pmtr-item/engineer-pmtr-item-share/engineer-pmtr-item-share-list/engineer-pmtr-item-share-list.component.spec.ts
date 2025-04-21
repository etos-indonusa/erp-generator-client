import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngineerPmtrItemShareListComponent } from './engineer-pmtr-item-share-list.component';

describe('EngineerPmtrItemShareListComponent', () => {
  let component: EngineerPmtrItemShareListComponent;
  let fixture: ComponentFixture<EngineerPmtrItemShareListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EngineerPmtrItemShareListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EngineerPmtrItemShareListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
