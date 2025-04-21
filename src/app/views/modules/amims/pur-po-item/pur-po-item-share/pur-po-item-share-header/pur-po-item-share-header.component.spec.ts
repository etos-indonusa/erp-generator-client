import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurPoItemShareHeaderComponent } from './pur-po-item-share-header.component';

describe('PurPoItemShareHeaderComponent', () => {
  let component: PurPoItemShareHeaderComponent;
  let fixture: ComponentFixture<PurPoItemShareHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PurPoItemShareHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurPoItemShareHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
