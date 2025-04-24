import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurPoShareWidgetComponent } from './pur-po-share-widget.component';

describe('PurPoShareWidgetComponent', () => {
  let component: PurPoShareWidgetComponent;
  let fixture: ComponentFixture<PurPoShareWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PurPoShareWidgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurPoShareWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
