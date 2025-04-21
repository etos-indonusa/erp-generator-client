import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TdDetailShareAddComponent } from './td-detail-share-add.component';

describe('TdDetailShareAddComponent', () => {
  let component: TdDetailShareAddComponent;
  let fixture: ComponentFixture<TdDetailShareAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TdDetailShareAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TdDetailShareAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
