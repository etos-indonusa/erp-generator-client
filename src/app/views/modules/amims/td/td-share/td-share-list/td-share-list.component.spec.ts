import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TdShareListComponent } from './td-share-list.component';

describe('TdShareListComponent', () => {
  let component: TdShareListComponent;
  let fixture: ComponentFixture<TdShareListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TdShareListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TdShareListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
