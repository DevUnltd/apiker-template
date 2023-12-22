import { Handler, res, apiker, elapsedSinceRequestStart } from "apiker";

export const getUserCounter: Handler = async ({ state }) => {
  // const initialCount = (await state().get("counter")) ?? 0;
  // const counter = initialCount + 1;
  const retriesRemaining = parseInt(apiker.responseHeaders?.get("X-RateLimit-Remaining") || "0");
  const payload = {
    //counter,
    retriesRemaining,
    isTest: true
  } as any;

  if (retriesRemaining < 5) {
    payload.warning =
      "ATTENTION! When retriesRemaining reaches Zero, you will be IP-banned! Only continue if you want to test that IP banning works ;)";
  }

  //await state().put({ counter });

  const initialCountUser = (await state("CounterUser").get("counterByThisUser")) ?? 0;
  const counterByThisUser = initialCountUser + 1;

  await state("CounterUser").put({ counterByThisUser });

  /**
   * Count by this IP
   */
  payload.counterByThisUser = counterByThisUser;

  /**
   * Show elapsedSinceStart
   */
  payload.requestTimeInMs = elapsedSinceRequestStart();

  return res(payload);
};
