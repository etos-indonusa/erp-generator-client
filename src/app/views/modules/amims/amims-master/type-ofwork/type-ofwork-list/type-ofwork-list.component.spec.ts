import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeOfworkListComponent } from './type-ofwork-list.component';

describe('TypeOfworkListComponent', () => {
  let component: TypeOfworkListComponent;
  let fixture: ComponentFixture<TypeOfworkListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TypeOfworkListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypeOfworkListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
