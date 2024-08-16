import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtIconComponentTsComponent } from './art-icon.component.ts.component';

describe('ArtIconComponentTsComponent', () => {
  let component: ArtIconComponentTsComponent;
  let fixture: ComponentFixture<ArtIconComponentTsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArtIconComponentTsComponent]
    });
    fixture = TestBed.createComponent(ArtIconComponentTsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
