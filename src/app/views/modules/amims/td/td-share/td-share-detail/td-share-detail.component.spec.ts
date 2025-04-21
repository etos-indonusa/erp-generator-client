import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TdShareDetailComponent } from './td-share-detail.component';

describe('TdShareDetailComponent', () => {
  let component: TdShareDetailComponent;
  let fixture: ComponentFixture<TdShareDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TdShareDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TdShareDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
