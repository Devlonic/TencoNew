import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TencoPageEventsComponent } from './tenco-page-events.component';

describe('TencoPageEventsComponent', () => {
  let component: TencoPageEventsComponent;
  let fixture: ComponentFixture<TencoPageEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TencoPageEventsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TencoPageEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
