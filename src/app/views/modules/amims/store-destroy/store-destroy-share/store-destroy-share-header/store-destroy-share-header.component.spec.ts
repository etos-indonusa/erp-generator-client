import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreDestroyShareHeaderComponent } from './store-destroy-share-header.component';

describe('StoreDestroyShareHeaderComponent', () => {
  let component: StoreDestroyShareHeaderComponent;
  let fixture: ComponentFixture<StoreDestroyShareHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StoreDestroyShareHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoreDestroyShareHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
