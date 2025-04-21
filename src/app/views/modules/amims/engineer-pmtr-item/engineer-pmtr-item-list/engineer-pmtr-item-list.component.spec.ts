import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngineerPmtrItemListComponent } from './engineer-pmtr-item-list.component';

describe('EngineerPmtrItemListComponent', () => {
  let component: EngineerPmtrItemListComponent;
  let fixture: ComponentFixture<EngineerPmtrItemListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EngineerPmtrItemListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EngineerPmtrItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
