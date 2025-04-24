import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechLogJoShareListComponent } from './tech-log-jo-share-list.component';

describe('TechLogJoShareListComponent', () => {
  let component: TechLogJoShareListComponent;
  let fixture: ComponentFixture<TechLogJoShareListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TechLogJoShareListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechLogJoShareListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
