import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngineerPmtrItemShareAddComponent } from './engineer-pmtr-item-share-add.component';

describe('EngineerPmtrItemShareAddComponent', () => {
  let component: EngineerPmtrItemShareAddComponent;
  let fixture: ComponentFixture<EngineerPmtrItemShareAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EngineerPmtrItemShareAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EngineerPmtrItemShareAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
