import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TencoTileReferenceContainerComponent } from './tenco-tile-reference-container.component';

describe('TencoTileReferenceContainerComponent', () => {
  let component: TencoTileReferenceContainerComponent;
  let fixture: ComponentFixture<TencoTileReferenceContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TencoTileReferenceContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TencoTileReferenceContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
