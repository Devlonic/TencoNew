import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TencoEventsListComponent } from './tenco-events-list.component';

describe('TencoEventsListComponent', () => {
  let component: TencoEventsListComponent;
  let fixture: ComponentFixture<TencoEventsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TencoEventsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TencoEventsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
