import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailMain } from './detail-main';

describe('DetailMain', () => {
  let component: DetailMain;
  let fixture: ComponentFixture<DetailMain>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailMain],
    }).compileComponents();

    fixture = TestBed.createComponent(DetailMain);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
