import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeOfworkShareListComponent } from './type-ofwork-share-list.component';

describe('TypeOfworkShareListComponent', () => {
  let component: TypeOfworkShareListComponent;
  let fixture: ComponentFixture<TypeOfworkShareListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TypeOfworkShareListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypeOfworkShareListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
