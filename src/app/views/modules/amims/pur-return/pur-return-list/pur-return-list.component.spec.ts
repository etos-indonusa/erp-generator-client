import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurReturnListComponent } from './pur-return-list.component';

describe('PurReturnListComponent', () => {
  let component: PurReturnListComponent;
  let fixture: ComponentFixture<PurReturnListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PurReturnListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurReturnListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
