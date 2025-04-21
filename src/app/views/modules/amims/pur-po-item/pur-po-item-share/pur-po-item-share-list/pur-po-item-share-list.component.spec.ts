import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurPoItemShareListComponent } from './pur-po-item-share-list.component';

describe('PurPoItemShareListComponent', () => {
  let component: PurPoItemShareListComponent;
  let fixture: ComponentFixture<PurPoItemShareListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PurPoItemShareListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurPoItemShareListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
