import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MpartDetailAlternativeComponent } from './mpart-detail-alternative.component';

describe('MpartDetailAlternativeComponent', () => {
  let component: MpartDetailAlternativeComponent;
  let fixture: ComponentFixture<MpartDetailAlternativeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MpartDetailAlternativeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MpartDetailAlternativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
