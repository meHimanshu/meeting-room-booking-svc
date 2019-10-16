import IQueryEntity from "./IQueryEntity";

export default interface IQueryBaseList extends IQueryEntity {
  limit?: number;
  skip?: number;
}
