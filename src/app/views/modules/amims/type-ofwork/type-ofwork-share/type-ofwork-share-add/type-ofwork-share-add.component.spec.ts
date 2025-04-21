import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeOfworkShareAddComponent } from './type-ofwork-share-add.component';

describe('TypeOfworkShareAddComponent', () => {
  let component: TypeOfworkShareAddComponent;
  let fixture: ComponentFixture<TypeOfworkShareAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TypeOfworkShareAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypeOfworkShareAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
