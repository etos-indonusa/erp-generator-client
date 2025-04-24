import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurGrnShareListComponent } from './pur-grn-share-list.component';

describe('PurGrnShareListComponent', () => {
  let component: PurGrnShareListComponent;
  let fixture: ComponentFixture<PurGrnShareListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PurGrnShareListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurGrnShareListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
