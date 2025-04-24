import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurPrShareHeaderComponent } from './pur-pr-share-header.component';

describe('PurPrShareHeaderComponent', () => {
  let component: PurPrShareHeaderComponent;
  let fixture: ComponentFixture<PurPrShareHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PurPrShareHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurPrShareHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
