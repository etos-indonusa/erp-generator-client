import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeOfworkShareDetailComponent } from './type-ofwork-share-detail.component';

describe('TypeOfworkShareDetailComponent', () => {
  let component: TypeOfworkShareDetailComponent;
  let fixture: ComponentFixture<TypeOfworkShareDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TypeOfworkShareDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypeOfworkShareDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
