import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TdRefShareDetailComponent } from './td-ref-share-detail.component';

describe('TdRefShareDetailComponent', () => {
  let component: TdRefShareDetailComponent;
  let fixture: ComponentFixture<TdRefShareDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TdRefShareDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TdRefShareDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
