import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DueListShareAddComponent } from './due-list-share-add.component';

describe('DueListShareAddComponent', () => {
  let component: DueListShareAddComponent;
  let fixture: ComponentFixture<DueListShareAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DueListShareAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DueListShareAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
