import Diary from './diary.model';

export default class User {
  constructor(public id: number,
              public username: string,
              public password: string,
              public diaries: Array<Diary>) {
  }
}
