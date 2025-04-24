import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MpartDetailLogComponent } from './mpart-detail-log.component';

describe('MpartDetailLogComponent', () => {
  let component: MpartDetailLogComponent;
  let fixture: ComponentFixture<MpartDetailLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MpartDetailLogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MpartDetailLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
