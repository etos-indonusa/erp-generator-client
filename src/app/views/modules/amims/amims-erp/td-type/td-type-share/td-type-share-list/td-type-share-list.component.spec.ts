import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TdTypeShareListComponent } from './td-type-share-list.component';

describe('TdTypeShareListComponent', () => {
  let component: TdTypeShareListComponent;
  let fixture: ComponentFixture<TdTypeShareListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TdTypeShareListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TdTypeShareListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
