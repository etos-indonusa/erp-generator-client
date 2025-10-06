import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WpJoShareHeaderComponent } from './wp-jo-share-header.component';

describe('WpJoShareHeaderComponent', () => {
  let component: WpJoShareHeaderComponent;
  let fixture: ComponentFixture<WpJoShareHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WpJoShareHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WpJoShareHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
