import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechLogJoShareDetailComponent } from './tech-log-jo-share-detail.component';

describe('TechLogJoShareDetailComponent', () => {
  let component: TechLogJoShareDetailComponent;
  let fixture: ComponentFixture<TechLogJoShareDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TechLogJoShareDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechLogJoShareDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
