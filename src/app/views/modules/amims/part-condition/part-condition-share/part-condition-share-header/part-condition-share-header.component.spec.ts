import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartConditionShareHeaderComponent } from './part-condition-share-header.component';

describe('PartConditionShareHeaderComponent', () => {
  let component: PartConditionShareHeaderComponent;
  let fixture: ComponentFixture<PartConditionShareHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PartConditionShareHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartConditionShareHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
