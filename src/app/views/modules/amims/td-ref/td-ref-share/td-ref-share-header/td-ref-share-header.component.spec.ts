import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TdRefShareHeaderComponent } from './td-ref-share-header.component';

describe('TdRefShareHeaderComponent', () => {
  let component: TdRefShareHeaderComponent;
  let fixture: ComponentFixture<TdRefShareHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TdRefShareHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TdRefShareHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
