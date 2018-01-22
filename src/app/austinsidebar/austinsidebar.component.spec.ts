import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AustinsidebarComponent } from './austinsidebar.component';

describe('AustinsidebarComponent', () => {
  let component: AustinsidebarComponent;
  let fixture: ComponentFixture<AustinsidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AustinsidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AustinsidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
