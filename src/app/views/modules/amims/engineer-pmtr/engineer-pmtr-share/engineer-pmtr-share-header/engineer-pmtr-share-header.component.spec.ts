import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngineerPmtrShareHeaderComponent } from './engineer-pmtr-share-header.component';

describe('EngineerPmtrShareHeaderComponent', () => {
  let component: EngineerPmtrShareHeaderComponent;
  let fixture: ComponentFixture<EngineerPmtrShareHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EngineerPmtrShareHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EngineerPmtrShareHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
