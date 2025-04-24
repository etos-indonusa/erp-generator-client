import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TdShareHeaderComponent } from './td-share-header.component';

describe('TdShareHeaderComponent', () => {
  let component: TdShareHeaderComponent;
  let fixture: ComponentFixture<TdShareHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TdShareHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TdShareHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
