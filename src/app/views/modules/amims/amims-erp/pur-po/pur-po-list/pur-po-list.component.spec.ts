import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurPoListComponent } from './pur-po-list.component';

describe('PurPoListComponent', () => {
  let component: PurPoListComponent;
  let fixture: ComponentFixture<PurPoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PurPoListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurPoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
