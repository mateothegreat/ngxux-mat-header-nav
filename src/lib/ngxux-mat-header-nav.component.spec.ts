import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxuxMatHeaderNavComponent } from './ngxux-mat-header-nav.component';

describe('NgxuxMatHeaderNavComponent', () => {
  let component: NgxuxMatHeaderNavComponent;
  let fixture: ComponentFixture<NgxuxMatHeaderNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxuxMatHeaderNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxuxMatHeaderNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
