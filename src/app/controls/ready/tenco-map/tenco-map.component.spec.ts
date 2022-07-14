import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TencoMapComponent } from './tenco-map.component';

describe('TencoMapComponent', () => {
  let component: TencoMapComponent;
  let fixture: ComponentFixture<TencoMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TencoMapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TencoMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
