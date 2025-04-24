import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibFormIssuedListComponent } from './lib-form-issued-list.component';

describe('LibFormIssuedListComponent', () => {
  let component: LibFormIssuedListComponent;
  let fixture: ComponentFixture<LibFormIssuedListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LibFormIssuedListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibFormIssuedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
