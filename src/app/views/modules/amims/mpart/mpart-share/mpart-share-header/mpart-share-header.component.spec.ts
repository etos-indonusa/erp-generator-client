import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MpartShareHeaderComponent } from './mpart-share-header.component';

describe('MpartShareHeaderComponent', () => {
  let component: MpartShareHeaderComponent;
  let fixture: ComponentFixture<MpartShareHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MpartShareHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MpartShareHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
