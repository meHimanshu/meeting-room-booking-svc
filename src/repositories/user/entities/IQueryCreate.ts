import { IQueryBaseCreate } from "../../entities";

export default interface ICreate extends IQueryBaseCreate {
  name: string;
  username: string;
  email: string;
  role: string;
  password: string;
  phoneNumber: string;
}
