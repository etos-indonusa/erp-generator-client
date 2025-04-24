import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TdRefShareAddComponent } from './td-ref-share-add.component';

describe('TdRefShareAddComponent', () => {
  let component: TdRefShareAddComponent;
  let fixture: ComponentFixture<TdRefShareAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TdRefShareAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TdRefShareAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
