import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientShareAddComponent } from './client-share-add.component';

describe('ClientShareAddComponent', () => {
  let component: ClientShareAddComponent;
  let fixture: ComponentFixture<ClientShareAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClientShareAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientShareAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
