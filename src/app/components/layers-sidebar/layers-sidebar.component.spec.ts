import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayersSidebarComponent } from './layers-sidebar.component';

describe('LayersSidebarComponent', () => {
  let component: LayersSidebarComponent;
  let fixture: ComponentFixture<LayersSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayersSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayersSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
