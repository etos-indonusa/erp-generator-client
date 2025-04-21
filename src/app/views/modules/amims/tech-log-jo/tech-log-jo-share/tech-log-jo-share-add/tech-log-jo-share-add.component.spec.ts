import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechLogJoShareAddComponent } from './tech-log-jo-share-add.component';

describe('TechLogJoShareAddComponent', () => {
  let component: TechLogJoShareAddComponent;
  let fixture: ComponentFixture<TechLogJoShareAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TechLogJoShareAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechLogJoShareAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
