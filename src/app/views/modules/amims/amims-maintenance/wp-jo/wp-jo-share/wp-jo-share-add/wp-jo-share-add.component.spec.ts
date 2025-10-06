import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WpJoShareAddComponent } from './wp-jo-share-add.component';

describe('WpJoShareAddComponent', () => {
  let component: WpJoShareAddComponent;
  let fixture: ComponentFixture<WpJoShareAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WpJoShareAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WpJoShareAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
