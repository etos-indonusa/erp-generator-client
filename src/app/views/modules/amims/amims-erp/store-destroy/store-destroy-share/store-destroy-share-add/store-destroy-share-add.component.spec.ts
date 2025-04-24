import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreDestroyShareAddComponent } from './store-destroy-share-add.component';

describe('StoreDestroyShareAddComponent', () => {
  let component: StoreDestroyShareAddComponent;
  let fixture: ComponentFixture<StoreDestroyShareAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StoreDestroyShareAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoreDestroyShareAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
