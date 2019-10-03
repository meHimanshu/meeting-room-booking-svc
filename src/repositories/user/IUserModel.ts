import IVersionableDocument from "../versionable/IVersionableDocument";

export default interface IUserModel extends IVersionableDocument {
  id: string;
  role: string;
  name: string;
  username: string;
  email: string;
  phoneNumber: string;
  password: string;
}
