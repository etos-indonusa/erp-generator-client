import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActypeShareWidgetComponent } from './actype-share-widget.component';

describe('ActypeShareWidgetComponent', () => {
  let component: ActypeShareWidgetComponent;
  let fixture: ComponentFixture<ActypeShareWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ActypeShareWidgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActypeShareWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
