import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurPoShareDetailComponent } from './pur-po-share-detail.component';

describe('PurPoShareDetailComponent', () => {
  let component: PurPoShareDetailComponent;
  let fixture: ComponentFixture<PurPoShareDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PurPoShareDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurPoShareDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
