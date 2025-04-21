import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurPoShareHeaderComponent } from './pur-po-share-header.component';

describe('PurPoShareHeaderComponent', () => {
  let component: PurPoShareHeaderComponent;
  let fixture: ComponentFixture<PurPoShareHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PurPoShareHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurPoShareHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
