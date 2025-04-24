import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurGrnShareAddComponent } from './pur-grn-share-add.component';

describe('PurGrnShareAddComponent', () => {
  let component: PurGrnShareAddComponent;
  let fixture: ComponentFixture<PurGrnShareAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PurGrnShareAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurGrnShareAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
