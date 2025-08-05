import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VDueListOutputShareHeaderComponent } from './v-due-list-output-share-header.component';

describe('VDueListOutputShareHeaderComponent', () => {
  let component: VDueListOutputShareHeaderComponent;
  let fixture: ComponentFixture<VDueListOutputShareHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VDueListOutputShareHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VDueListOutputShareHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
