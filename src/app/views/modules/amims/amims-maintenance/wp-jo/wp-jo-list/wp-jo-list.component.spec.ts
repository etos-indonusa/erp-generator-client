import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WpJoListComponent } from './wp-jo-list.component';

describe('WpJoListComponent', () => {
  let component: WpJoListComponent;
  let fixture: ComponentFixture<WpJoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WpJoListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WpJoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
