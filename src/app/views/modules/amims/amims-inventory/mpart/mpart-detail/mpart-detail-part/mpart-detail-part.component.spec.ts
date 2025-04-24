import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MpartDetailPartComponent } from './mpart-detail-part.component';

describe('MpartDetailPartComponent', () => {
  let component: MpartDetailPartComponent;
  let fixture: ComponentFixture<MpartDetailPartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MpartDetailPartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MpartDetailPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
