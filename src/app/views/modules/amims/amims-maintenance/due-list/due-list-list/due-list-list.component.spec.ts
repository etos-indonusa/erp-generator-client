import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DueListListComponent } from './due-list-list.component';

describe('DueListListComponent', () => {
  let component: DueListListComponent;
  let fixture: ComponentFixture<DueListListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DueListListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DueListListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
