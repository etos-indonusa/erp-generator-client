import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeOfworkShareHeaderComponent } from './type-ofwork-share-header.component';

describe('TypeOfworkShareHeaderComponent', () => {
  let component: TypeOfworkShareHeaderComponent;
  let fixture: ComponentFixture<TypeOfworkShareHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TypeOfworkShareHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypeOfworkShareHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
