import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TencoTileReferenceComponent } from './tenco-tile-reference.component';

describe('TencoTileReferenceComponent', () => {
  let component: TencoTileReferenceComponent;
  let fixture: ComponentFixture<TencoTileReferenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TencoTileReferenceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TencoTileReferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
