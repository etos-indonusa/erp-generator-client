import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurPrListComponent } from './pur-pr-list.component';

describe('PurPrListComponent', () => {
  let component: PurPrListComponent;
  let fixture: ComponentFixture<PurPrListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PurPrListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurPrListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
