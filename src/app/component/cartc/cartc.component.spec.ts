import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartcComponent } from './cartc.component';

describe('CartcComponent', () => {
  let component: CartcComponent;
  let fixture: ComponentFixture<CartcComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CartcComponent]
    });
    fixture = TestBed.createComponent(CartcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
