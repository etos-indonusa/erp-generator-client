import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartConditionShareDetailComponent } from './part-condition-share-detail.component';

describe('PartConditionShareDetailComponent', () => {
  let component: PartConditionShareDetailComponent;
  let fixture: ComponentFixture<PartConditionShareDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PartConditionShareDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartConditionShareDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
