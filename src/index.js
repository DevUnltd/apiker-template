import { apiker, OBMT } from "apiker";
import { getUserCounter } from "./controllers/counter";
import objects from "./objects.json";

const routes = {
  "/users/:id/counter": getUserCounter
};

apiker.init({
  routes,
  objects,
  exports,
  // Make an object instance per IP for the following objects.
  // This helps with performance as the requests won't go to a single instance (Recommended)
  objectStateMapping: {
    RateLimit: OBMT.SIGNEDIP,
    Logs: OBMT.SIGNEDIP,
    Bans: OBMT.SIGNEDIP
  }
});
