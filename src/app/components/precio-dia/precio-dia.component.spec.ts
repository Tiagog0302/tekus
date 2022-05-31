import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrecioDiaComponent } from './precio-dia.component';

describe('PrecioDiaComponent', () => {
  let component: PrecioDiaComponent;
  let fixture: ComponentFixture<PrecioDiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrecioDiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrecioDiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
