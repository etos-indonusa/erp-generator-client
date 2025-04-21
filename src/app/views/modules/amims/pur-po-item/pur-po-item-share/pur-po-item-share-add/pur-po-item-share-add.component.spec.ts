import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurPoItemShareAddComponent } from './pur-po-item-share-add.component';

describe('PurPoItemShareAddComponent', () => {
  let component: PurPoItemShareAddComponent;
  let fixture: ComponentFixture<PurPoItemShareAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PurPoItemShareAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurPoItemShareAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
