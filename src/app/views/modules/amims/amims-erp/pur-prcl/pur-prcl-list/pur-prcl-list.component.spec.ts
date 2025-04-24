import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurPrclListComponent } from './pur-prcl-list.component';

describe('PurPrclListComponent', () => {
  let component: PurPrclListComponent;
  let fixture: ComponentFixture<PurPrclListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PurPrclListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurPrclListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
