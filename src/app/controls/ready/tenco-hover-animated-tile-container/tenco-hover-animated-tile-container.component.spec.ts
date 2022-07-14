import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TencoHoverAnimatedTileContainerComponent } from './tenco-hover-animated-tile-container.component';

describe('TencoHoverAnimatedTileContainerComponent', () => {
  let component: TencoHoverAnimatedTileContainerComponent;
  let fixture: ComponentFixture<TencoHoverAnimatedTileContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TencoHoverAnimatedTileContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TencoHoverAnimatedTileContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
