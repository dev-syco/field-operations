import { values } from 'lodash';

/* eslint-disable */

export default class Enum {
  public static toArray(obj: object): Array<string | number> {
    return values(obj);
  }

  public static getKeys(obj: Record<number, string>): string[] {
    return Object.keys(obj).filter((x) => !(parseInt(x) >= 0));
  }
}
