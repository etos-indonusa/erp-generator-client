import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagShareComponent } from './tag-share.component';

describe('TagShareComponent', () => {
  let component: TagShareComponent;
  let fixture: ComponentFixture<TagShareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TagShareComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TagShareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
