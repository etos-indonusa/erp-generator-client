import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TdTypeShareHeaderComponent } from './td-type-share-header.component';

describe('TdTypeShareHeaderComponent', () => {
  let component: TdTypeShareHeaderComponent;
  let fixture: ComponentFixture<TdTypeShareHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TdTypeShareHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TdTypeShareHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
