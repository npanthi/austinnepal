import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NepalsidebarComponent } from './nepalsidebar.component';

describe('NepalsidebarComponent', () => {
  let component: NepalsidebarComponent;
  let fixture: ComponentFixture<NepalsidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NepalsidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NepalsidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
