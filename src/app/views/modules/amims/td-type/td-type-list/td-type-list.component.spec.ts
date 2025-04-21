import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TdTypeListComponent } from './td-type-list.component';

describe('TdTypeListComponent', () => {
  let component: TdTypeListComponent;
  let fixture: ComponentFixture<TdTypeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TdTypeListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TdTypeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
