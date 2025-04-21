import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartLogListComponent } from './part-log-list.component';

describe('PartLogListComponent', () => {
  let component: PartLogListComponent;
  let fixture: ComponentFixture<PartLogListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PartLogListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartLogListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
