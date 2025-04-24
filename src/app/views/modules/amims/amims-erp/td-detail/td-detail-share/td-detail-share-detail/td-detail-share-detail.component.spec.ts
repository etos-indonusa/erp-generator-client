import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TdDetailShareDetailComponent } from './td-detail-share-detail.component';

describe('TdDetailShareDetailComponent', () => {
  let component: TdDetailShareDetailComponent;
  let fixture: ComponentFixture<TdDetailShareDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TdDetailShareDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TdDetailShareDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
