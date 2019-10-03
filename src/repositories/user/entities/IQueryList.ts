import { IQueryBaseList } from '../../entities';

export default interface IQueryList extends IQueryBaseList {
  limit?: number;
  skip?: number;
  sort?: any;
}
