import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreDestroyShareWidgetComponent } from './store-destroy-share-widget.component';

describe('StoreDestroyShareWidgetComponent', () => {
  let component: StoreDestroyShareWidgetComponent;
  let fixture: ComponentFixture<StoreDestroyShareWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StoreDestroyShareWidgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoreDestroyShareWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
