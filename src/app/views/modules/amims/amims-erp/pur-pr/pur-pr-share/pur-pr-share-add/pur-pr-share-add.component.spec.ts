import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurPrShareAddComponent } from './pur-pr-share-add.component';

describe('PurPrShareAddComponent', () => {
  let component: PurPrShareAddComponent;
  let fixture: ComponentFixture<PurPrShareAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PurPrShareAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurPrShareAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
