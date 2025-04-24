import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TdRefShareListComponent } from './td-ref-share-list.component';

describe('TdRefShareListComponent', () => {
  let component: TdRefShareListComponent;
  let fixture: ComponentFixture<TdRefShareListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TdRefShareListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TdRefShareListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
