import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurPrShareListComponent } from './pur-pr-share-list.component';

describe('PurPrShareListComponent', () => {
  let component: PurPrShareListComponent;
  let fixture: ComponentFixture<PurPrShareListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PurPrShareListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurPrShareListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
