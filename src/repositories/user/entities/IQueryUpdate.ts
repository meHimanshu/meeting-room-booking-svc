import { IQueryBaseUpdate } from "../../entities";

export default interface IQueryUpdate extends IQueryBaseUpdate {
  name: string;
  username: string;
  email: string;
  role: string;
  password: string;
  phoneNumber: string;
}
