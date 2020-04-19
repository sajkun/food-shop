import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuMarkerComponent } from './menu-marker.component';

describe('MenuMarkerComponent', () => {
  let component: MenuMarkerComponent;
  let fixture: ComponentFixture<MenuMarkerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuMarkerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuMarkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
