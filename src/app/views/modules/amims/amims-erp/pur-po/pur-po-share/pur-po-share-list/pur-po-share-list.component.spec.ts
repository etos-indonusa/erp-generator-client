import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurPoShareListComponent } from './pur-po-share-list.component';

describe('PurPoShareListComponent', () => {
  let component: PurPoShareListComponent;
  let fixture: ComponentFixture<PurPoShareListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PurPoShareListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurPoShareListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
