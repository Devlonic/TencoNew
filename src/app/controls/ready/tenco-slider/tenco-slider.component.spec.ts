import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TencoSliderComponent } from './tenco-slider.component';

describe('TencoSliderComponent', () => {
  let component: TencoSliderComponent;
  let fixture: ComponentFixture<TencoSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TencoSliderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TencoSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
