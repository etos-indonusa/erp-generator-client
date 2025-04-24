import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TdDetailListComponent } from './td-detail-list.component';

describe('TdDetailListComponent', () => {
  let component: TdDetailListComponent;
  let fixture: ComponentFixture<TdDetailListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TdDetailListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TdDetailListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
