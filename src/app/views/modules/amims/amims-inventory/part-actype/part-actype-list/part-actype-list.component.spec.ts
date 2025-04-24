import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartActypeListComponent } from './part-actype-list.component';

describe('PartActypeListComponent', () => {
  let component: PartActypeListComponent;
  let fixture: ComponentFixture<PartActypeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PartActypeListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartActypeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
