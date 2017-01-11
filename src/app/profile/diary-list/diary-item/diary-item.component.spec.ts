/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DiaryItemComponent } from './diary-item.component';

describe('DiaryItemComponent', () => {
  let component: DiaryItemComponent;
  let fixture: ComponentFixture<DiaryItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiaryItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiaryItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
