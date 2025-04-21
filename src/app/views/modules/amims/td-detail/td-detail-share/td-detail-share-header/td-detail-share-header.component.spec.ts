import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TdDetailShareHeaderComponent } from './td-detail-share-header.component';

describe('TdDetailShareHeaderComponent', () => {
  let component: TdDetailShareHeaderComponent;
  let fixture: ComponentFixture<TdDetailShareHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TdDetailShareHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TdDetailShareHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
