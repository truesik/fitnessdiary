/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ExerciseSetService } from './exercise-set.service';

describe('ExerciseSetService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExerciseSetService]
    });
  });

  it('should ...', inject([ExerciseSetService], (service: ExerciseSetService) => {
    expect(service).toBeTruthy();
  }));
});
