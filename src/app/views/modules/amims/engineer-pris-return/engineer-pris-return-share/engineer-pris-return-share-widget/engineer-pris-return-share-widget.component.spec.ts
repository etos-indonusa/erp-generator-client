import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngineerPrisReturnShareWidgetComponent } from './engineer-pris-return-share-widget.component';

describe('EngineerPrisReturnShareWidgetComponent', () => {
  let component: EngineerPrisReturnShareWidgetComponent;
  let fixture: ComponentFixture<EngineerPrisReturnShareWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EngineerPrisReturnShareWidgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EngineerPrisReturnShareWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
