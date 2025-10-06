import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WpJoShareListComponent } from './wp-jo-share-list.component';

describe('WpJoShareListComponent', () => {
  let component: WpJoShareListComponent;
  let fixture: ComponentFixture<WpJoShareListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WpJoShareListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WpJoShareListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
