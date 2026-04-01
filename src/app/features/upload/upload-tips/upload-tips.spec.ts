import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadTips } from './upload-tips';

describe('UploadTips', () => {
  let component: UploadTips;
  let fixture: ComponentFixture<UploadTips>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UploadTips],
    }).compileComponents();

    fixture = TestBed.createComponent(UploadTips);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
