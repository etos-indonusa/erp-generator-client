import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctypeShareAddComponent } from './doctype-share-add.component';

describe('DoctypeShareAddComponent', () => {
  let component: DoctypeShareAddComponent;
  let fixture: ComponentFixture<DoctypeShareAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DoctypeShareAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctypeShareAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
