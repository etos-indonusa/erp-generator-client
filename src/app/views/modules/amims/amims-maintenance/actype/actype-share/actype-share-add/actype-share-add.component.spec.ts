import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActypeShareAddComponent } from './actype-share-add.component';

describe('ActypeShareAddComponent', () => {
  let component: ActypeShareAddComponent;
  let fixture: ComponentFixture<ActypeShareAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ActypeShareAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActypeShareAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
