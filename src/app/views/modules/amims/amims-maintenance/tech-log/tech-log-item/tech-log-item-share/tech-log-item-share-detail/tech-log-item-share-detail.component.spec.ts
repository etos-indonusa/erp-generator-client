import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechLogItemShareDetailComponent } from './tech-log-item-share-detail.component';

describe('TechLogItemShareDetailComponent', () => {
  let component: TechLogItemShareDetailComponent;
  let fixture: ComponentFixture<TechLogItemShareDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TechLogItemShareDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechLogItemShareDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
