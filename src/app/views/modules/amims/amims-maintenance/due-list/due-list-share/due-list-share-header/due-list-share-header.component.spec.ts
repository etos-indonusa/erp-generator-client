import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DueListShareHeaderComponent } from './due-list-share-header.component';

describe('DueListShareHeaderComponent', () => {
  let component: DueListShareHeaderComponent;
  let fixture: ComponentFixture<DueListShareHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DueListShareHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DueListShareHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
