import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurPoItemListComponent } from './pur-po-item-list.component';

describe('PurPoItemListComponent', () => {
  let component: PurPoItemListComponent;
  let fixture: ComponentFixture<PurPoItemListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PurPoItemListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurPoItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
