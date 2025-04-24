import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TdDetailAcShareAddComponent } from './td-detail-ac-share-add.component';

describe('TdDetailAcShareAddComponent', () => {
  let component: TdDetailAcShareAddComponent;
  let fixture: ComponentFixture<TdDetailAcShareAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TdDetailAcShareAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TdDetailAcShareAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
