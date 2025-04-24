import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreDestroyListComponent } from './store-destroy-list.component';

describe('StoreDestroyListComponent', () => {
  let component: StoreDestroyListComponent;
  let fixture: ComponentFixture<StoreDestroyListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StoreDestroyListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoreDestroyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
