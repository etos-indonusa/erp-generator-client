import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibFormIssuedShareDetailComponent } from './lib-form-issued-share-detail.component';

describe('LibFormIssuedShareDetailComponent', () => {
  let component: LibFormIssuedShareDetailComponent;
  let fixture: ComponentFixture<LibFormIssuedShareDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LibFormIssuedShareDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibFormIssuedShareDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
