import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechLogItemShareHeaderComponent } from './tech-log-item-share-header.component';

describe('TechLogItemShareHeaderComponent', () => {
  let component: TechLogItemShareHeaderComponent;
  let fixture: ComponentFixture<TechLogItemShareHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TechLogItemShareHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechLogItemShareHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
