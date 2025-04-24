import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TdShareAddComponent } from './td-share-add.component';

describe('TdShareAddComponent', () => {
  let component: TdShareAddComponent;
  let fixture: ComponentFixture<TdShareAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TdShareAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TdShareAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
