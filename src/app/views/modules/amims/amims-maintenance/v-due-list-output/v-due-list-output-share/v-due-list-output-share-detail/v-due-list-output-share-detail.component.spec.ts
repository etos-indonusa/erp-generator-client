import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VDueListOutputShareDetailComponent } from './v-due-list-output-share-detail.component';

describe('VDueListOutputShareDetailComponent', () => {
  let component: VDueListOutputShareDetailComponent;
  let fixture: ComponentFixture<VDueListOutputShareDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VDueListOutputShareDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VDueListOutputShareDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
