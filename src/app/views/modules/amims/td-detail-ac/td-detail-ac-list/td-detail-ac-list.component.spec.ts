import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TdDetailAcListComponent } from './td-detail-ac-list.component';

describe('TdDetailAcListComponent', () => {
  let component: TdDetailAcListComponent;
  let fixture: ComponentFixture<TdDetailAcListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TdDetailAcListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TdDetailAcListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
