import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeOfworkShareWidgetComponent } from './type-ofwork-share-widget.component';

describe('TypeOfworkShareWidgetComponent', () => {
  let component: TypeOfworkShareWidgetComponent;
  let fixture: ComponentFixture<TypeOfworkShareWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TypeOfworkShareWidgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypeOfworkShareWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
