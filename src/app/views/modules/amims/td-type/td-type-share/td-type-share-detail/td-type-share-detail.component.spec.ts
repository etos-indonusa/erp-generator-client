import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TdTypeShareDetailComponent } from './td-type-share-detail.component';

describe('TdTypeShareDetailComponent', () => {
  let component: TdTypeShareDetailComponent;
  let fixture: ComponentFixture<TdTypeShareDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TdTypeShareDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TdTypeShareDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
