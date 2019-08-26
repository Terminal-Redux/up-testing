import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpSettingsComponent } from './up-settings.component';

describe('UpSettingsComponent', () => {
  let component: UpSettingsComponent;
  let fixture: ComponentFixture<UpSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
