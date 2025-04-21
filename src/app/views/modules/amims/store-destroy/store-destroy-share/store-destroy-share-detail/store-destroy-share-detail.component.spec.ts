import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreDestroyShareDetailComponent } from './store-destroy-share-detail.component';

describe('StoreDestroyShareDetailComponent', () => {
  let component: StoreDestroyShareDetailComponent;
  let fixture: ComponentFixture<StoreDestroyShareDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StoreDestroyShareDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoreDestroyShareDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
