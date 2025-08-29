import {Priority} from '../enums/priority';
import {Status} from '../enums/status';

export class Goal {
  public id?: string;
  public name?: string;
  public priority?: Priority;
  public status?: Status;
  public createdAt?: Date;
  public updatedAt?: Date;

  constructor() {

  }
}
