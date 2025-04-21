import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TdDetailAcShareListComponent } from './td-detail-ac-share-list.component';

describe('TdDetailAcShareListComponent', () => {
  let component: TdDetailAcShareListComponent;
  let fixture: ComponentFixture<TdDetailAcShareListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TdDetailAcShareListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TdDetailAcShareListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
