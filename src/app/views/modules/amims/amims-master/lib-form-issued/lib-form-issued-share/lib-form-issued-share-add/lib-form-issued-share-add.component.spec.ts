import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibFormIssuedShareAddComponent } from './lib-form-issued-share-add.component';

describe('LibFormIssuedShareAddComponent', () => {
  let component: LibFormIssuedShareAddComponent;
  let fixture: ComponentFixture<LibFormIssuedShareAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LibFormIssuedShareAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibFormIssuedShareAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
