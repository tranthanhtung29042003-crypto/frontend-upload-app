import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadDrive } from './upload-drive';

describe('UploadDrive', () => {
  let component: UploadDrive;
  let fixture: ComponentFixture<UploadDrive>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UploadDrive],
    }).compileComponents();

    fixture = TestBed.createComponent(UploadDrive);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
