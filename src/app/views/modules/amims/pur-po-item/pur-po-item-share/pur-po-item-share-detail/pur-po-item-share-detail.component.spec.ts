import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurPoItemShareDetailComponent } from './pur-po-item-share-detail.component';

describe('PurPoItemShareDetailComponent', () => {
  let component: PurPoItemShareDetailComponent;
  let fixture: ComponentFixture<PurPoItemShareDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PurPoItemShareDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurPoItemShareDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
