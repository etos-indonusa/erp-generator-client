import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreDestroyShareListComponent } from './store-destroy-share-list.component';

describe('StoreDestroyShareListComponent', () => {
  let component: StoreDestroyShareListComponent;
  let fixture: ComponentFixture<StoreDestroyShareListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StoreDestroyShareListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoreDestroyShareListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
