import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctypeShareDetailComponent } from './doctype-share-detail.component';

describe('DoctypeShareDetailComponent', () => {
  let component: DoctypeShareDetailComponent;
  let fixture: ComponentFixture<DoctypeShareDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DoctypeShareDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctypeShareDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
