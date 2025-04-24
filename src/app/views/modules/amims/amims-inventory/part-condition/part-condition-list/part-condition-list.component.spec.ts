import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartConditionListComponent } from './part-condition-list.component';

describe('PartConditionListComponent', () => {
  let component: PartConditionListComponent;
  let fixture: ComponentFixture<PartConditionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PartConditionListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartConditionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
