import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'skillLevel'})
export class SkillLevel implements PipeTransform {
  transform(value: number): string {

    value = Math.floor(value/10);

    switch (value) {
      case (1):
        return("Passing Knowledge");
        break;
      case (2):
        return("Beginner");
        break;
      case (3):
        return("Familiar");
        break;
      case (4):
        return("Novice");
        break;
      case (5):
        return("Moderate");
        break;
      case (6):
        return("Competent");
        break;
      case (7):
        return("Experienced");
        break;
      case (8):
        return("Proficient");
        break;
      case (9):
        return("Expert");
        break;
      case (10):
        return("Godmode");
        break;
      default:
        return("Broken");
    }

  }
}
