import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TdDetailAcShareHeaderComponent } from './td-detail-ac-share-header.component';

describe('TdDetailAcShareHeaderComponent', () => {
  let component: TdDetailAcShareHeaderComponent;
  let fixture: ComponentFixture<TdDetailAcShareHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TdDetailAcShareHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TdDetailAcShareHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
