import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngstorageComponent } from './angstorage.component';

describe('AngstorageComponent', () => {
  let component: AngstorageComponent;
  let fixture: ComponentFixture<AngstorageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngstorageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngstorageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
