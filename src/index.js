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
  firewall: {
    limitRequestsPerMinute: 30
  },
  debug: true,
  adminPanel: false,
  objectStateMapping: {
    CounterUser: OBMT.SIGNEDIP,
    RateLimit: OBMT.SIGNEDIP,
    Logs: OBMT.SIGNEDIP,
    Bans: OBMT.SIGNEDIP
  }
});
