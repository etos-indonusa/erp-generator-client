import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DueListShareListComponent } from './due-list-share-list.component';

describe('DueListShareListComponent', () => {
  let component: DueListShareListComponent;
  let fixture: ComponentFixture<DueListShareListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DueListShareListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DueListShareListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
