import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurReturnShareWidgetComponent } from './pur-return-share-widget.component';

describe('PurReturnShareWidgetComponent', () => {
  let component: PurReturnShareWidgetComponent;
  let fixture: ComponentFixture<PurReturnShareWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PurReturnShareWidgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurReturnShareWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
