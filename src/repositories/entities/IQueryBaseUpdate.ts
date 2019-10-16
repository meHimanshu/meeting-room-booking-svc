import IQueryEntity from "./IQueryEntity";

export default interface IQueryBaseUpdate extends IQueryEntity {
  originalId: string;
}
