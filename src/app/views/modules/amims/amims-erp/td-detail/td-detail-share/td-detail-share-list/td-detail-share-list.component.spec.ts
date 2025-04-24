import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TdDetailShareListComponent } from './td-detail-share-list.component';

describe('TdDetailShareListComponent', () => {
  let component: TdDetailShareListComponent;
  let fixture: ComponentFixture<TdDetailShareListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TdDetailShareListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TdDetailShareListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
