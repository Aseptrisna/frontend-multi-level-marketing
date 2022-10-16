import Http from "./server";
import { authHeader } from "../helper/getToken";
class Service {
  GetPMember(data) {
    return Http.get("member/get",{ headers: authHeader() });
  }
  AddMember(data) {
    console.log({ headers: authHeader() })
    return Http.post("member/create", data, { headers: authHeader() });
  }
  MigrateMember(data) {
    return Http.post("member/migrate", data, { headers: authHeader() });
  }
  Login(data) {
    return Http.post("users/signin", data, { headers: authHeader() });
  }
}
export default new Service();
