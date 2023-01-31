import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScroolingComponent } from './scrooling.component';

describe('ScroolingComponent', () => {
  let component: ScroolingComponent;
  let fixture: ComponentFixture<ScroolingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScroolingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScroolingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
