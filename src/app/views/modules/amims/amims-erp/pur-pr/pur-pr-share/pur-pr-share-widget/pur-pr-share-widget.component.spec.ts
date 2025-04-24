import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurPrShareWidgetComponent } from './pur-pr-share-widget.component';

describe('PurPrShareWidgetComponent', () => {
  let component: PurPrShareWidgetComponent;
  let fixture: ComponentFixture<PurPrShareWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PurPrShareWidgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurPrShareWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
