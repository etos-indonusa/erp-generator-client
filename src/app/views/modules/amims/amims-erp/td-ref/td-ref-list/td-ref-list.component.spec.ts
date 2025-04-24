import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TdRefListComponent } from './td-ref-list.component';

describe('TdRefListComponent', () => {
  let component: TdRefListComponent;
  let fixture: ComponentFixture<TdRefListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TdRefListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TdRefListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
