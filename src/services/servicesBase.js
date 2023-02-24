import Axios from "axios";

class ServiceBase {
  constructor() {
    this.get = (api, params) => {
      return Axios.get(api, params);
    };
    this.post = (api, params) => {
      return Axios.post(api, params);
    };
    this.put = (api, params) => {
      return Axios.post(api, params);
    };
  }
}
export default new ServiceBase();
