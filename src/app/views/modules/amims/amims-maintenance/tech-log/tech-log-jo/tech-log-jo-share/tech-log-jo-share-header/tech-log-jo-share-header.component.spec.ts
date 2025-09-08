import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechLogJoShareHeaderComponent } from './tech-log-jo-share-header.component';

describe('TechLogJoShareHeaderComponent', () => {
  let component: TechLogJoShareHeaderComponent;
  let fixture: ComponentFixture<TechLogJoShareHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TechLogJoShareHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechLogJoShareHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
