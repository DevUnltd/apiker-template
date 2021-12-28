import { apiker } from "apiker";
import { getUserCounter } from "./controllers/counter";
import objects from "./objects.json";

const routes = {
  "/users/:id/counter": getUserCounter
};

apiker.init({
  routes,
  objects,
  exports
});
