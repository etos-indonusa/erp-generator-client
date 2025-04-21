import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DueListShareDetailComponent } from './due-list-share-detail.component';

describe('DueListShareDetailComponent', () => {
  let component: DueListShareDetailComponent;
  let fixture: ComponentFixture<DueListShareDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DueListShareDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DueListShareDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
