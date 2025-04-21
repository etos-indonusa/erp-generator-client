import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurPoShareAddComponent } from './pur-po-share-add.component';

describe('PurPoShareAddComponent', () => {
  let component: PurPoShareAddComponent;
  let fixture: ComponentFixture<PurPoShareAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PurPoShareAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurPoShareAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
