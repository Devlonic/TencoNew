import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TencoEventItemComponent } from './tenco-event-item.component';

describe('TencoEventItemComponent', () => {
  let component: TencoEventItemComponent;
  let fixture: ComponentFixture<TencoEventItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TencoEventItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TencoEventItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
