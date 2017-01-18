import Diary from './diary.model';

export default class User {
  id: number;
  username: string;
  password: string;
  diaries: Diary[];

  constructor(json?) {
    if (json) {
      Object.assign(this, json, {
        diaries: json.diaries ? json.diaries.map(diary => new Diary(diary)) : []
      });
    }
  }
}
