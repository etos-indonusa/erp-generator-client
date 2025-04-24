import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MpartDetailComponent } from './mpart-detail.component';

describe('MpartDetailComponent', () => {
  let component: MpartDetailComponent;
  let fixture: ComponentFixture<MpartDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MpartDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MpartDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
