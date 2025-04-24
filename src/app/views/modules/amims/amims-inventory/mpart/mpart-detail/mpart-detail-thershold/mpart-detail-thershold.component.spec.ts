import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MpartDetailThersholdComponent } from './mpart-detail-thershold.component';

describe('MpartDetailThersholdComponent', () => {
  let component: MpartDetailThersholdComponent;
  let fixture: ComponentFixture<MpartDetailThersholdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MpartDetailThersholdComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MpartDetailThersholdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
