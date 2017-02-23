import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let skills = [
      { "skill": "Javascript", "value": 76 },
      { "skill": "HTML", "value": 90 },
      { "skill": "CSS/SCSS", "value": 94 },
      { "skill": "PHP", "value": 66 },
      { "skill": "mySQL", "value": 46 }
    ];
    return { skills };
  }
}
