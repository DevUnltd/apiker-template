import { apiker } from "apiker";
import { getUserCounter } from "./controllers/counter";
import objects from "./objects.json";

const routes = {
  "/users/:id/counter": getUserCounter
};

apiker.init({
  routes,
  objects,
  exports,
  // Make an object instance per IP. This helps performance (Recommended)
  objectStateMapping: {
    RateLimit: OBMT.SIGNEDIP,
    Logs: OBMT.SIGNEDIP,
    Bans: OBMT.SIGNEDIP
  }
});
