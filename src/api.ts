import { apiker, handleRequest } from "apiker";
import MyController from "./controllers/MyController";
import routes from "./routes.json";

const handlers = {
  MyController
};

class API {
  constructor(state) {
    state.blockConcurrencyWhile(async () => {
      apiker.init({ routes, handlers, state });
    });
  }

  /**
   * Handle HTTP requests
   */
  fetch = handleRequest;
}

export default API;
