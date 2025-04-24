import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TdTypeShareAddComponent } from './td-type-share-add.component';

describe('TdTypeShareAddComponent', () => {
  let component: TdTypeShareAddComponent;
  let fixture: ComponentFixture<TdTypeShareAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TdTypeShareAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TdTypeShareAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
