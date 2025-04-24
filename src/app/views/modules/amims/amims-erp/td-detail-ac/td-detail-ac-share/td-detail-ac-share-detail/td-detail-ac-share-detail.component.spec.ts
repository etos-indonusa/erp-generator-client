import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TdDetailAcShareDetailComponent } from './td-detail-ac-share-detail.component';

describe('TdDetailAcShareDetailComponent', () => {
  let component: TdDetailAcShareDetailComponent;
  let fixture: ComponentFixture<TdDetailAcShareDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TdDetailAcShareDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TdDetailAcShareDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
