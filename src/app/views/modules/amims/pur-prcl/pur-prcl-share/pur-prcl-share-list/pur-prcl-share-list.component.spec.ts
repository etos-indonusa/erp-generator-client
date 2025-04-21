import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurPrclShareListComponent } from './pur-prcl-share-list.component';

describe('PurPrclShareListComponent', () => {
  let component: PurPrclShareListComponent;
  let fixture: ComponentFixture<PurPrclShareListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PurPrclShareListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurPrclShareListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
