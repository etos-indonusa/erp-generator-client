import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngineerPmtrShareDetailComponent } from './engineer-pmtr-share-detail.component';

describe('EngineerPmtrShareDetailComponent', () => {
  let component: EngineerPmtrShareDetailComponent;
  let fixture: ComponentFixture<EngineerPmtrShareDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EngineerPmtrShareDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EngineerPmtrShareDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
